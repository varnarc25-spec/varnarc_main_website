# Node Web App

This is a fresh Node.js + Express web application scaffold.

## Setup

1. Copy env file:
   - `cp .env.example .env`
2. Install dependencies:
   - `npm install`
3. Run development server:
   - `npm run dev`
4. Open:
   - `http://localhost:3000`

## Structure

- `src/server.js` - app bootstrap
- `src/app.js` - middleware and route wiring
- `src/routes/` - route definitions
- `src/controllers/` - request handlers
- `views/` - server rendered templates (EJS)
- `public/` - static assets
