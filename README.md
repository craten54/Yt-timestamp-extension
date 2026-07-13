# YouTube VOD Timestamp Generator

An open-source, serverless Chrome Extension that automatically generates structured video chapters and downloads full transcripts from YouTube VODs with one click using the Google Gemini API. It includes a modular Next.js landing page with an interactive extension simulator.

---

## 📂 Project Structure

This repository is structured as a clean mono-repo to isolate the extension runtime from the website build files:

```markdown
yt-timestamp-extension/
├── extension/             # Clean Chrome Extension source code (manifest, HTML, CSS, JS)
├── website/               # Next.js / React / TypeScript source code for the landing page
├── docs/                  # Compiled production static website (served on GitHub Pages)
└── README.md              # Main project documentation
```

---

## 🔌 Part 1: Chrome Extension Setup

### Features
*   **One-Click Download:** Instantly fetch and save YouTube video transcripts as `.txt` files.
*   **AI Chapter Generation:** Gemini automatically groups transcript segments into logical, formatted YouTube chapters (`MM:SS - Title`).
*   **Local Storage & Privacy:** Your Google Gemini API Key and transcripts are processed and saved locally in `chrome.storage.local`. No external data collection.

### Installation (Developer Unpacked Mode)
1.  Download this repository as a ZIP and extract it (or clone it).
2.  Open Google Chrome and navigate to: `chrome://extensions/`
3.  In the top right, toggle the **Developer mode** switch to **ON**.
4.  In the top left, click the **Load unpacked** button.
5.  Select the **`extension/`** folder from the extracted repository (the directory containing `manifest.json`).

---

## 🔑 Part 2: Gemini API Key Setup

This extension runs on a **Bring Your Own Key (BYOK)** model. It communicates directly from your browser to Google Gemini API endpoints, eliminating third-party subscription fees.

### How to Get Your Free Key:
1.  Navigate to [Google AI Studio](https://aistudio.google.com/).
2.  Sign in using your standard Google/Gmail account.
3.  Click the blue **Get API Key** button on the dashboard.
4.  Select **Create API Key** and copy the string (starts with `AIzaSy...`).
5.  Open the VOD Timestamp extension popup, paste the key, and click **Simpan Key**.

*Note: Google AI Studio developer keys are 100% free with a generous tier limit (15 Requests per Minute, 1000 Requests per Day for Gemini 1.5 Flash).*

---

## 🌐 Part 3: Landing Page Website

The website provides a beautiful dark/light themed showcase of the extension, a live step-by-step tutorial, and an interactive extension popup simulator for users.

### Website Development
To run the website builder project locally:
1.  Navigate into the website folder:
    ```bash
    cd website
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Compilation & Hosting (GitHub Pages)
The website is configured for static export. Running a build compiles the Next.js pages and automatically updates the root `/docs` folder:
```bash
npm run build
```

To host the landing page for free on **GitHub Pages**:
1.  Push the updated `/docs` folder to your GitHub repository.
2.  Open your repository settings on GitHub.
3.  Go to **Pages** (under Code and automation).
4.  Set Build and deployment Source to **Deploy from a branch**.
5.  Select your main branch and set the folder path to **`/docs`**.
6.  Click **Save**. Your website will be live in a few minutes!