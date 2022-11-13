import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      insertTypesEntry: true,
      exclude: ["node_modules/**", "test-project/node_modules/**"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/index.tsx",
      name: "MauvesUi",
      fileName: (format) => `mauves-ui.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["solid-js"],
    },
  },
});
