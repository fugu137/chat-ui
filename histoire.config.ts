import { defaultColors, defineConfig } from "histoire";
import { HstSvelte } from "@histoire/plugin-svelte";

export default defineConfig({
	setupFile: "/src/histoire.setup.ts",
	plugins: [HstSvelte()],
	theme: {
		title: "Chat UI - Preview",
		favicon: "chat-solid.png",
		logo: {
			light: "/src/lib/images/chat-solid.png",
			dark: "/src/lib/images/chat-outline.png"
		},
		colors: {
			primary: defaultColors.blue
		}
	}
});
