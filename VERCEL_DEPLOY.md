# Vercel deployment

1. **Always commit `package-lock.json`** with your code. Vercel runs `npm ci`, which needs an exact lockfile.
2. After changing dependencies locally, run `npm install` and commit the updated `package-lock.json`.
3. In Vercel: **Node 20.x** (or match `.nvmrc`). Clear **Build Cache** if a deploy still fails after fixing the lockfile.
