import { codeInspectorPlugin } from "code-inspector-plugin";


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(
      codeInspectorPlugin({
        bundler: "webpack",
      })
    );
    return config;
  },
//   output: "standalone",
};

export default nextConfig;
