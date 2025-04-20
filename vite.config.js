import { resolve } from 'node:path'
import {defineConfig, loadEnv} from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
  // We need access to env vars in our config to support setting a basepath.
  // See https://vite.dev/config/#using-environment-variables-in-config
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [TanStackRouterVite({autoCodeSplitting: true}), viteReact(), tailwindcss()],
    test: {
      globals: true,
      environment: 'jsdom',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  }
})
