import { defineConfig } from "taze"

export default defineConfig({
  // ignore packages from bumping
  exclude: [
    "webpack",
  ],
  // fetch latest package info from registry without cache
  force: true,
  // use a custom fast-npm-meta compatible API endpoint
  // fastNpmMetaApiEndpoint: "https://npm.antfu.dev/",
  // retry behavior when fetching package metadata fails:
  // a number for retry count, `false` to disable, or an object for fine-grained
  // control, e.g. { retries: 4, factor: 2, minTimeout: 1000, maxTimeout: 30_000, randomize: false }
  retry: 4,
  // write to package.json
  write: false,
  // run `npm install` or `yarn install` right after bumping
  install: true,
  // ignore paths for looking for package.json in monorepo
  ignorePaths: [
    "**/node_modules/**",
    "**/test/**",
  ],
  // ignore package.json that in other workspaces (with their own .git,pnpm-workspace.yaml,etc.)
  ignoreOtherWorkspaces: true,
  // override with different bumping mode for each package
  packageMode: {
    "typescript": "minor",
    "@types/node": "minor",
  },
  // exclude packages from the maturity period filter
  maturityPeriodExclude: [],
  // disable checking for "overrides" package.json field
  depFields: {
    overrides: false,
  },
  // GitHub Actions updates: `true` (default) | `false` to opt out | options object
  githubActions: {
    // 'auto' (preserve existing style) | 'tag' | 'sha'
    style: "auto",
  },
})

