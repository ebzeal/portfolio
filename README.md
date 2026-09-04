# Olusola Ajayi — Portfolio

One-page portfolio site for Olusola Ajayi, Senior Full-Stack Software Engineer. Built with Next.js, TypeScript, and Tailwind CSS. 

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The digital-twin chat connects to `http://localhost:8000` by default. For a deployed backend, set this before building the static site:

```bash
NEXT_PUBLIC_CHAT_API_URL=https://your-api.example.com npm run build
```

The backend must include the website origin in its comma-separated `CORS_ORIGINS` environment variable.

## Resume

To enable the **Resume** link in the nav, copy your PDF resume into the project as:

```
public/resume.pdf
```

The link points to `/resume.pdf`.

## Build

```bash
npm run build
npm start
```

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Inter** & **JetBrains Mono** (fonts)
