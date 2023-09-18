import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), WindiCSS({ transformCSS: 'pre' })],
  resolve: {
    alias: {
      $images: path.resolve('src/assets/images'),
      $icons: path.resolve('src/assets/icons'),
      $svgs: path.resolve('src/assets/svgs'),
      $lib: path.resolve('src/lib'),
      $src: path.resolve('src')
    }
  }
};

export default config;