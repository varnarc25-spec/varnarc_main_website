import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    build: {
        outDir: 'public/build',
        manifest: 'manifest.json',
        emptyOutDir: true,
        chunkSizeWarningLimit: 4000
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
            buildDirectory: 'build',
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'resources'),
            '@favicon': '/resources/images/',
        },
    },
});
