// next.config.mjs
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/src/app/api/:path*', // Ajusta la ruta según tu estructura de carpetas
            },
        ];
    },
};

export default nextConfig;
