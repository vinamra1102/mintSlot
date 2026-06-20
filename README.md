# MintSlot 🟢

> Your time, your slot.

A full booking solution — mobile-friendly web app and Android app — both powered by Setmore for appointment scheduling. Built as a demo project for a client pitch.

---

## Live

| | Link |
|---|---|
| 🌐 Web app | [mintslot-weld.vercel.app](https://mintslot-weld.vercel.app) |
| 📱 Android | Build via EAS (see below) |

---

## Repo structure
mintSlot/

├── web/    → React + Vite + Tailwind CSS website

└── app/    → Expo React Native Android app

---

## Web

### Stack
- React 18
- Vite
- Tailwind CSS v3
- React Router v6
- DM Sans (Google Fonts)
- Setmore embed

### Pages
- `/` — Hero, trust bar, how it works, booking embed, about snippet, CTA
- `/about` — Full about page
- `/contact` — Contact details and map

### Run locally
```bash
cd web
npm install
npm run dev
```

### Deploy
Connected to Vercel. Auto-deploys on push to main.

---

## Android App

### Stack
- Expo SDK
- React Native
- React Navigation
- React Native WebView
- Setmore WebView integration

### Screens
- Home screen — brand landing with Book My Slot CTA
- Booking screen — Setmore booking page in a native WebView

### Run locally
```bash
cd app
npm install
npx expo start
```

### Build APK
```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```
Expo builds in the cloud and returns a direct APK download link.

---

## Booking backend

Powered by [Setmore](https://setmore.com) — no custom backend needed. Business owner manages bookings from the Setmore dashboard directly.

---

## Brand

| Token | Value |
|---|---|
| Primary | `#16A34A` |
| Surface | `#F0FDF4` |
| Dark | `#14532D` |
| Font | DM Sans |

---

## License
MIT
