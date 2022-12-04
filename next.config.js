const i18n = require("./next-i18next.config");

const nextConfig = {
  // target: "serverless",
  // reactStrictMode: true,
  swcMinify: true,
  // i18n,
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    IMAGE_URL: process.env.IMAGE_URL,
    DEFAULT_IMAGE_URL: process.env.DEFAULT_IMAGE_URL,
  },
}

module.exports = nextConfig