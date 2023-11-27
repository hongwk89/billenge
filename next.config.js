/** @type {import('next').NextConfig} */

require("dotenv").config({ path: "config/.env" });
require("dotenv").config({ path: "config/.env" + "." + process.env.APP_ENV });

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Next에게 styled-component도 처리해달라고 옵션을 설정해줌
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
};
