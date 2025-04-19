# `UK Cathedral Plotter Frontend`

A proof-of-concept (PoC) frontend that plots UK Cathedrals on a Leaflet.js map.

This app was initialised using the TanStack app creation script:

```bash
npx create-tsrouter-app@latest
```

Though overkill for this PoC app, it provides a quick way to get started with a React app with some favourites
pre-configured, including:

- tailwind
- typescript
- vite
- eslint

The alternative, more traditional quick starter, "Create React App", was not used as it has
been [sunset](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)

# Running Locally

To run this application locally:

```bash
npm install
npm start
```

If you have the `uk-cathedral-plotter-backend` running locally the two should now be able to communicate.

By default, when running in dev the frontend will send API requests to `http://localhost:9212`.
If you want to change the port that the backend is hosted on make sure to create a `.env.development.local` file
at the root of this project with the contents:

```yaml
# Replace <port> with the port number the backend is hosted on
VITE_API_URL=http://localhost:<port>
```

# Building For Production

To build this application for production:

```bash
npm run build
```

The build will be output to `dist`.
Copy the files in `dist` to `uk-cathedral-plotter-backend/public/frontend`

```bash
mv dist/* ../uk-cathedral-plotter-backend/public/frontend
```
