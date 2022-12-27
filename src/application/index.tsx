import { SettingsProvider } from 'application/SettingsProvider';
import { Loader } from 'components';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';

export function Application() {
  return (
    <Suspense fallback={<Loader />}>
      <SettingsProvider>
        <MainPage />
      </SettingsProvider>
    </Suspense>
  );
}
