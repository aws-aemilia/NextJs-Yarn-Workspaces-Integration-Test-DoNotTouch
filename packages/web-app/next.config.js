const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@project/components',
]);

const nextConfig = {
  experimental: {
    // this will allow nextjs to resolve files (js, ts, css)
    // outside packages/app directory. 
    externalDir: true,
  },
};

module.exports = withPlugins([
  withTM(
    // nextjs config
    {
      ...nextConfig,
    }
  ),
]);
