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

# Step-by-step: Locally running frontend and backend

## Backend

Clone the `uk-cathedral-plotter-backend` to your local system.

```bash
git clone git@github.com:r-rayns/uk-cathedral-plotter-backend.git
```

Change to the `uk-cathedral-plotter-backend` directory and install the dependencies.

```bash
cd uk-cathedral-plotter-backend
npm install
```

Create a `.env` file at the root of the project.

```bash
touch .env
```

Once created, copy and paste the following into the `.env` file:

```yaml
# The port number the server should run on (default 9212)
PORT=9212
```

Start the backend server in `development` mode:

```bash
npm run dev
```

## Frontend

Clone the `uk-cathedral-plotter-frontend` to your local system.

```bash
git clone git@github.com:r-rayns/uk-cathedral-plotter-frontend.git
```

Change to the `uk-cathedral-plotter-frontend` directory and install the dependencies.

```bash
cd uk-cathedral-plotter-frontend
npm install
```

Start the frontend:

```bash
npm start
```

The frontend should then be running on port 3000, and you should be able to open a browser to see the app running at:
`http://localhost:3000/`.
