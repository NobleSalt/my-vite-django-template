import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from "vite-jsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, mode, ssrBuild)
  if (command === 'serve') {
    return {
      plugins: [react(), jsconfigPaths()],
      build: { manifest: true },
      // root: "./src"
    }
  }
  else if (command === 'build') {
    return {
      plugins: [react(), jsconfigPaths()],
      build: { manifest: true },
      base: "/static/",
    }
  }

})
