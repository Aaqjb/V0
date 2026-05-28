Weekly Flow — Liquid Glass PWA

What is included
- Installable PWA setup: manifest.json, icons, iOS home-screen metadata, splash images.
- Offline mode: sw.js caches the app shell after the first online visit.
- Home Screen app feel: standalone display, app icon, theme colours, iOS startup images.
- Backup/import: Settings > Backup lets you export and import a JSON backup.

How to use on iPhone
1. Upload this entire folder to Netlify, Vercel, GitHub Pages, or any HTTPS host.
2. Open the hosted link in Safari.
3. Tap Share > Add to Home Screen.
4. Open Weekly Flow from the Home Screen once while online so offline caching can complete.
5. After that, the app shell should open offline.

Important
- Service workers and installable PWA behaviour do not run from a local file:// link.
- The app must be served over HTTPS or localhost.
- Progress is stored locally on the device/browser. Use Export Backup before clearing browser data or changing device.
