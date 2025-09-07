// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: './'   // must be './' for Docker/Nginx
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',   // ensures relative paths in build
  build: {
    outDir: 'dist'
  }
});
