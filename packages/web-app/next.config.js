const nextConfig = {
  transpilePackages: ["../components"],
  experimental: {
    // this will allow nextjs to resolve files (js, ts, css)
    externalDir: true,
  },
};

module.exports = nextConfig