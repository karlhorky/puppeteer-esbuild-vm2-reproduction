# puppeteer-esbuild-vm2-reproduction

Reproduction for https://github.com/puppeteer/puppeteer/issues/10352

Reproduction steps:

1. `pnpm build`
2. `node abc.mjs`

```bash
$ pnpm build  

> @upleveled/drone@1.0.0 build /Users/k/p/puppeteer-esbuild-vm2
> esbuild index.ts --bundle --outfile=abc.mjs --platform=node --target=node18 --format=esm --banner:js="import { createRequire as createRequire99 } from 'module'; import { dirname as dirname99 } from 'node:path'; import { fileURLToPath as fileURLToPath99 } from 'node:url'; const __filename = fileURLToPath99(import.meta.url); const __dirname = dirname99(__filename); const require = createRequire99(import.meta.url);"

  abc.mjs  3.5mb ⚠️

⚡ Done in 134ms
$ node abc.mjs
node:fs:601
  handleErrorFromBinding(ctx);
  ^

Error: ENOENT: no such file or directory, open '/Users/k/p/puppeteer-esbuild-vm2/bridge.js'
    at Object.openSync (node:fs:601:3)
    at Object.readFileSync (node:fs:469:35)
    at node_modules/.pnpm/vm2@3.9.19/node_modules/vm2/lib/vm.js (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:46576:66)
    at __require2 (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:20:50)
    at node_modules/.pnpm/vm2@3.9.19/node_modules/vm2/lib/main.js (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:48448:9)
    at __require2 (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:20:50)
    at node_modules/.pnpm/vm2@3.9.19/node_modules/vm2/index.js (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:48476:22)
    at __require2 (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:20:50)
    at node_modules/.pnpm/degenerator@4.0.2/node_modules/degenerator/dist/index.js (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:48490:17)
    at __require2 (file:///Users/k/p/puppeteer-esbuild-vm2/abc.mjs:20:50) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '/Users/k/p/puppeteer-esbuild-vm2/bridge.js'
}

Node.js v18.16.0
```
