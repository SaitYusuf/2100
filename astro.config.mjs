import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://2100.yusufsait.com',
  base: '/',
  integrations: [starlight({
    title: '2100',
    description: 'A comprehensive guide to the ideal day in the year 2100.',
    social: {
      youtube: 'https://www.youtube.com/@the2100project'
    },
    customCss: [
      // Path to your Tailwind base styles:
      './src/tailwind.css',
      '@fontsource/inter',
    ],
    sidebar: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Sleep',
      autogenerate: {
        directory: 'sleep'
      }
    }, {
      label: 'Diet',
      autogenerate: {
        directory: 'diet'
      }
    }, {
      label: 'Movement',
      autogenerate: {
        directory: 'movement'
      }
    }, {
      label: 'Supplementation',
      autogenerate: {
        directory: 'supplementation'
      }
    }, {
      label: 'Mastery',
      autogenerate: {
        directory: 'mastery'
      }
    }]
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});