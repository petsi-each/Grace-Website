const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? '/Grace-Website' : '',
    assetPrefix: isProd ? '/Grace-Website/' : '',
    images: {
      unoptimized: true
    }
  };
  export default nextConfig;