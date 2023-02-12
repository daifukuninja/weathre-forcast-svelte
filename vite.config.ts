import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { replaceCodePlugin } from "vite-plugin-replace";
import { config } from 'dotenv'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
// })
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      svelte(),
      replaceCodePlugin({
        replacements: [
          {
            from: "__backend",
            to: JSON.stringify({
              env: {
                ...config().parsed
              }
            })
          }
        ]
      })
    ],
    // To access env vars here use process.env.TEST_VAR
  });
}