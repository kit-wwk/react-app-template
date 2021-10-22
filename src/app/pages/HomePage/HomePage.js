import React, { Suspense } from 'react';
import { toAbsoluteUrl } from '../../helpers';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import HomeFallback from './HomeFallback';


const HomeMainComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("hello")}</h1>
        <img src={toAbsoluteUrl("/media/svg/logo.svg")} className="App-logo" alt="logo" />
        <Trans i18nKey="link">
          一起來
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            這裡
          </a>
          學習 React 吧
        </Trans>
        <div>
          <button onClick={() => changeLanguage("zh-hk")}>中文</button>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("es")}>Español</button>
        </div>
      </header>
    </div>
  );
}

const HomePage = () => {
  return (
    <Suspense fallback={<HomeFallback/>}>
      <HomeMainComponent />
    </Suspense>
  )
};

export { HomePage };
