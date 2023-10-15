import { defineConfig, configDefaults } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest-setup.ts"],
		exclude: [...configDefaults.exclude, "tests"]
	},
	resolve: {
		alias: [{ find: "$lib", replacement: resolve(__dirname, "./src/lib") }]
	}
});
