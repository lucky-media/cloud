import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ["resources/css/site.css", "resources/js/site.js"],
            refresh: true,
        }),
    ],
});
