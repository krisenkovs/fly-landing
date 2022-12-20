import { TranslateProvider } from 'application/TranslateProvider';
import { Loader } from 'components';
import React, { Suspense } from 'react';

export function Application() {
  return (
    <Suspense fallback={<Loader />}>
      <TranslateProvider></TranslateProvider>
    </Suspense>
  );
}
