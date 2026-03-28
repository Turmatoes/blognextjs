/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns là cách cấu hình hiện đại và bảo mật hơn domains
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jsonplaceholder.typicode.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
        // Hỗ trợ các định dạng ảnh nén cao giúp web tải nhanh hơn
        formats: ['image/avif', 'image/webp'],
    },
    // Các cấu hình bổ sung khác nếu cần
    experimental: {
        // serverActions: true, // Bật nếu bạn dùng form action phía server
    },
};

module.exports = nextConfig;