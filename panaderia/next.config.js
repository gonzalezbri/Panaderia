/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
      appDir: true,
    },
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' }, // Replace '*' with the specific origin if required
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' }, // Add allowed methods
            { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' }, // Add allowed headers
          ],
        },
      ];
    },
  };
