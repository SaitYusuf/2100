import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://2100.yusufsait.com',
	base: '/',
	integrations: [
		starlight({
			title: '2100',
			description: 'A comprehensive guide to the ideal day in the year 2100.',
			social: {
				youtube: 'https://www.youtube.com/@the2100project',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/'
				},
				{
					label: 'Sleep',
					autogenerate: {directory: 'sleep'}
				},
				{
					label: 'Diet',
					autogenerate: {directory: 'diet'}
				},
				{
					label: 'Exercise',
					autogenerate: {directory: 'exercise'}
				},
				{
					label: 'Supplementation',
					autogenerate: {directory: 'supplementation'}
				},
				{
					label: 'Mastery',
					autogenerate: {directory: 'mastery'}
				}
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
