import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: { rehypePlugins: ["rehype-pretty-code"] },
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        // pathname: "/avatars/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        // pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        // pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
        port: "",
        // pathname: "/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
