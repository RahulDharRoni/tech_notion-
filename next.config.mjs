/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shreethemes.in",
      },
      {
        protocol: "https",
        hostname: "www.startech.com.bd",
        port: "",
        pathname: "/image/cache/catalog/home/banner/**",
      },
    ],
  },
};

export default nextConfig;
