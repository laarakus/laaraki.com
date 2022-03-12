import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation();
  return (
    <ul className="flex items-center justify-center h-screen space-x-2">
      <li>
        <a href="mailto:walid@laaraki.com" className="underline">
          {t('common:contact')}
        </a>
      </li>
      <li>
        <a href="https://twitter.com/laarakus" className="underline">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/laarakus" className="underline">
          Github
        </a>
      </li>
    </ul>
  );
};

export default Home;
