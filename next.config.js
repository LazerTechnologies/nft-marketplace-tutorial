const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /** Next.js i18n docs:
   * @see https://nextjs.org/docs/advanced-features/i18n-routing
   * Reference repo for i18n:
   * @see https://github.com/juliusmarminge/t3-i18n
   **/
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["gateway.ipfscdn.io", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
