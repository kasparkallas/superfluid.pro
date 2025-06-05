import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	define: {
		global: "globalThis",
	},
	resolve: {
		alias: {
			"node:buffer": "buffer",
		},
	},
	optimizeDeps: {
		include: ["buffer"],
	},
});
