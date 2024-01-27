/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverActionsBodySizeLimit: "5mb"
    },
    images: {
      domains:['res.cloudinary.com'],
      remotePatterns:[{
        protocol:'https',
        hostname:'res.cloudinary.com',
        port:'',
        pathname:"/dz1i63qzt/image/upload/v1701774882/project_fabio/**"
      }]
    }
  }

module.exports = nextConfig
