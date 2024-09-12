/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    images: {
        domains: ['picsum.photos', 'www.dropbox.com', 'drive.google.com'],
    },
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
    },
};

export default nextConfig;

