import { TranslateProvider } from 'application/TranslateProvider';
import { Loader } from 'components';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';

export function Application() {
  return (
    <Suspense fallback={<Loader />}>
      <TranslateProvider>
        <MainPage />
      </TranslateProvider>
    </Suspense>
  );
}
