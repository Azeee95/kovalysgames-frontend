/** @type {import('next').NextConfig} */

const nextConfig = {
 
    experimental: {
        serverActions: true,
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',

          },
        ],
      },

      env: {
        backendserver: 'https://kovalysgames-backend.vercel.app',
      },
}


module.exports = nextConfig
