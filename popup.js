document.addEventListener('DOMContentLoaded', () => {
    const apiKeyInput = document.getElementById('apiKeyInput');
    const saveKeyBtn = document.getElementById('saveKeyBtn');
    const generateBtn = document.getElementById('generateBtn');
    const statusContainer = document.getElementById('statusContainer');
    const statusMsg = document.getElementById('statusMsg');

    // 1. Muat API Key dari Chrome Storage saat popup dibuka
    chrome.storage.local.get(['geminiApiKey'], (result) => {
        if (result.geminiApiKey) {
            apiKeyInput.value = result.geminiApiKey;
        }
    });

    // 2. Fungsi untuk menyimpan API Key
    saveKeyBtn.addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        if (key) {
            chrome.storage.local.set({ geminiApiKey: key }, () => {
                showStatus('✅ API Key berhasil disimpan!', 'text-green-400');
            });
        } else {
            showStatus('⚠️ Key tidak boleh kosong.', 'text-yellow-400');
        }
    });

    // 3. Trigger utama saat tombol "Generate" ditekan
    generateBtn.addEventListener('click', async () => {
        const key = apiKeyInput.value.trim();
        if (!key) {
            showStatus('⚠️ Harap masukkan & simpan API Key dulu!', 'text-yellow-400');
            return;
        }

        // Ambil tab Chrome yang sedang aktif
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // Pastikan pengguna sedang membuka YouTube
        if (!tab.url.includes("youtube.com/watch") && !tab.url.includes("youtube.com/live")) {
            showStatus('❌ Buka halaman video/VOD YouTube terlebih dahulu.', 'text-red-400');
            return;
        }

        // Matikan tombol sementara agar tidak di-klik dobel
        generateBtn.disabled = true;
        generateBtn.classList.add('opacity-50', 'cursor-not-allowed');
        showStatus('⏳ Sedang memproses... Mohon tunggu (jangan tutup popup).', 'text-yellow-400');

        // Kirim perintah ke background.js untuk melakukan penarikan transkrip dan AI
        chrome.runtime.sendMessage({
            action: "GENERATE_TIMESTAMP",
            url: tab.url,
            apiKey: key
        }, (response) => {
            // Nyalakan tombol kembali
            generateBtn.disabled = false;
            generateBtn.classList.remove('opacity-50', 'cursor-not-allowed');

            if (response && response.success) {
                showStatus('✅ Selesai! Mengunduh file...', 'text-green-400');
                downloadFile(response.data, response.videoId);
            } else {
                const errorText = response ? response.error : 'Terjadi kesalahan sistem.';
                showStatus(`❌ Gagal: ${errorText}`, 'text-red-400');
            }
        });
    });

    // --- Fungsi Bantuan ---

    // Fungsi menampilkan status di popup
    function showStatus(text, colorClass) {
        statusContainer.classList.remove('hidden');
        statusMsg.className = `text-xs font-semibold ${colorClass}`;
        statusMsg.textContent = text;
    }

    // Fungsi Auto-Download file TXT menggunakan Blob
    function downloadFile(content, videoId) {
        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `VOD_Timestamp_${videoId}.txt`; // Penamaan file otomatis

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
});