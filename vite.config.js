import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		assetsDir: "assets",
		outDir: "build",
	},
	base: "https://valdobaldo.blob.core.windows.net/assets/",
};

export default config;
