/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["cdn.imagin.studio"] },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignore: true },
};

export default nextConfig;
