import { codeInspectorPlugin } from "code-inspector-plugin";
import  WorkboxPlugin  from 'workbox-webpack-plugin';


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
    if (dev) {
      config.plugins.push(
        codeInspectorPlugin({
          bundler: "webpack",
        })
      );
    }

    // 只在生产环境和非服务器端添加 Workbox 插件
    if (!dev && !isServer) {
      config.plugins.push(
        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 24 * 60 * 60 // 24 hours
                }
              }
            }
          ]
        })
      );
    }

    return config;
  },
//   output: "standalone",
};

export default nextConfig;
