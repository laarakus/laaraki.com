import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation();
  return <div className="flex justify-center items-center h-screen">
    <a href="mailto:walid@laaraki.com" className="underline">{t('common:contact')}</a>
  </div>;
}

export default Home;
