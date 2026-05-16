/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    // support web workers
    if (!isServer) {
      config.module.rules.push({
        test: /\.worker\.ts$/,
        use: [{ loader: 'worker-loader', options: { inline: 'fallback' } }],
      });
    }
    return config;
  },
};
module.exports = nextConfig;
