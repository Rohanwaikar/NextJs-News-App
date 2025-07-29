/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required if you're using <Image /> without server support
  },
};

export default nextConfig;