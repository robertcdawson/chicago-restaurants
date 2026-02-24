# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Chicago Restaurants — a Create React App (React 17) frontend. Single service, no backend or database.

### Node.js version

This project requires **Node.js 14** (`nvm use 14`). The `node-sass` v5 dependency has native bindings that fail to compile on Node >= 16. The VM's `nvm` default is set to 14 by the update script.

### Commands

| Task | Command |
|------|---------|
| Install deps | `yarn install` |
| Dev server | `BROWSER=none yarn start` (port 3000) |
| Lint | `npx eslint src/` |
| Test | `CI=true yarn test` |
| Build | `yarn build` |

See `README.md` for additional CRA documentation.

### Known issues

- `src/App.test.js` is stale: it asserts `/learn react/i` but the app renders "Find Food Fast in the Windy City". The test will fail until updated.
- ESLint reports one warning: unused `logo` import in `src/App.js`.
