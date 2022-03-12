const i18n = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': [],
  },
  loadLocaleFrom: (locale, namespace) => {
    return import(`./locales/${locale}/${namespace}.json`).then(
      (m) => m.default,
    );
  },
};

module.exports = i18n;
