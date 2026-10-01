# ByteeX — Frontend (React)

ByteeX landing page built with React (Create React App). All content (text and
images) is loaded from the Strapi backend via its REST API.

## ⚠️ Start the backend first

The frontend pulls its content from the Strapi API, so the **backend must be
running first** (see `byteexBack/README.md`). Only after that start the
frontend.

If the backend is not running, the site still opens but shows only the fallback
(hardcoded) content instead of the data from the CMS.

## Running

```bash
npm install     # once — install dependencies
npm start       # dev server at http://localhost:3000
```

## Backend URL

Configured in the `.env` file at the project root:

```
REACT_APP_STRAPI_URL=http://localhost:1337
```

After changing `.env`, restart `npm start` — CRA reads env variables only at
startup.

## Production build

```bash
npm run build   # optimized build into the build/ folder
```
