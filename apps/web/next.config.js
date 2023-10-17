/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/jonpol01/novel-rs",
        permanent: true,
      },
      {
        source: "/sdk",
        destination: "https://www.npmjs.com/package/novel",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/package/novel",
        permanent: true,
      },
      {
        source: "/svelte",
        destination: "https://github.com/tglide/novel-svelte",
        permanent: false,
      },
      {
        source: "/vue",
        destination: "https://github.com/naveennaidu/novel-vue",
        permanent: false,
      },
      {
        source: "/vscode",
        destination:
          "https://marketplace.visualstudio.com/items?itemName=bennykok.novel-vscode",
        permanent: false,
      },
      {
        source: "/feedback",
        destination: "https://github.com/jonpol01/novel-rs/issues",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/novel",
        permanent: true,
      },
    ];
  },
  productionBrowserSourceMaps: true,
};

// module.exports = nextConfig;
module.exports = {
  // ... rest of the configuration.
  nextConfig,
  output: 'standalone',
}