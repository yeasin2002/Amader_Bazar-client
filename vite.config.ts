import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            $: path.resolve(__dirname, "./"),
            $src: path.resolve(__dirname, "./src/"),
            $asserts: `${path.resolve(__dirname, "./src/asserts/")}`,
            $hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
            $layout: `${path.resolve(__dirname, "./src/layout/")}`,
            $pages: `${path.resolve(__dirname, "./src/pages/")}`,
            $utils: `${path.resolve(__dirname, "./src/utils/")}`,
            $data: `${path.resolve(__dirname, "./src/data")}`,
            $store: `${path.resolve(__dirname, "./src/store/")}`,
            $style: `${path.resolve(__dirname, "./src/style/")}`,
            $components: `${path.resolve(__dirname, "./src/components/")}`,
            $ui: `${path.resolve(__dirname, "./src/ui/")}`,
        },
    },
});
