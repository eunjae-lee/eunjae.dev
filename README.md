# eunjae.dev

TanStack Start + Tailwind + Coss UI example site.

## Local dev

```bash
npm install
npm run dev
```

The Vite dev server is configured in `vite.config.ts` to listen on `0.0.0.0:5173` and allow the Tailnet hostname.

## Tailnet access

To access the dev server from the Tailnet:

```bash
npm run dev
/Applications/Tailscale.app/Contents/MacOS/Tailscale serve --bg --http 5173 5173
```

Then open:

```text
http://eunjaes-mac-mini-3.tail93e3.ts.net:5173/
```

If it returns `403`, check that `vite.config.ts` includes `allowedHosts: ['eunjaes-mac-mini-3.tail93e3.ts.net']`.
