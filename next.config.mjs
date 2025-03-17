// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   async redirects() {
//     return [
//       {
//         source: '/index',
//         destination: '/',
//         permanent: true,
//       },
//       {
//         source: '/_not-found',
//         destination: '/404',
//         permanent: false,
//       },
//     ];
//   },
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/_not-found',
        destination: '/404',
        permanent: false,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  reactComponentAnnotation: {
    enabled: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;