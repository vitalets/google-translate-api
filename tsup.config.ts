import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/node.ts", "src/browser.ts"],
  clean: true,
  outDir: "./dist",
  format: ["esm", "cjs"],
  dts: true,
});
