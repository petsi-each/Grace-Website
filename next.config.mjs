/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Grace-Website' : '',
  assetPrefix: isProd ? '/Grace-Website/' : '',
};

export default nextConfig;
