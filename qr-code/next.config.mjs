// qr-code/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist/qr-code",
  basePath: "/frontend-practice/qr-code", // Ensure this is set correctly if you are using a base path
  output: "export",
  images: {
    unoptimized: true, // Add this if you are not using optimized images
  },
};

export default nextConfig;
