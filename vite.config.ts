// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore:Cannot find module 'path' or its corresponding type declarations.ts(2307)
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore:Cannot find name '__dirname'.ts(2304)
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
  plugins: [react()],
})
