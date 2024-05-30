const basePath = process.env.NODE_ENV === 'production' ? '/Grace-Website' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: basePath,
    assetPrefix: basePath+'/',
    images: {
      unoptimized: true
    }
  };
  export default nextConfig;