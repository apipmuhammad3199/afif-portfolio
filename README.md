# Muhammad Afif Abiyyu — Portfolio

Personal portfolio site built with React + Vite. Sections: Hero, Stats, About, Skills, Experience, Projects, Education, Contact. Supports English/Indonesian (`src/translations.js`) and light/dark theme. Contact form messages are stored in Firebase Realtime Database and readable via the `#/inbox` route.

## Stack

- React 19 + Vite
- Firebase Realtime Database (contact form storage)
- oxlint for linting

## Scripts

```
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run oxlint
npm run deploy    # build and publish dist/ to GitHub Pages
```

## Firebase setup

`src/firebase.js` holds the Firebase client config (safe to expose — it's not a secret). Access control is enforced by the **Realtime Database security rules** in the Firebase console, not by anything in this repo. The `#/inbox` login screen is a UI gate only; make sure the database rules require authentication before relying on it to protect submitted messages.
