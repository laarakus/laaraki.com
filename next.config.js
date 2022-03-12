const nextTranslate = require('next-translate');

const nextConfig = {
  images: {
    domains: [
      'laaraki.com',
    ],
  },
};

module.exports = nextTranslate(nextConfig);
