import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react';

const TranslateContext = createContext<(key: string) => string>(() => '');

export function TranslateProvider({ children }: PropsWithChildren) {
  const t = useCallback((key: string) => {
    let item: any = {};
    key.split('.').forEach((path) => {
      if (typeof item === 'object' && item?.[path]) {
        item = item?.[path];
      } else {
        return item;
      }
    });

    if (typeof item === 'string') {
      return item;
    }

    return key;
  }, []);

  return <TranslateContext.Provider value={t}>{children}</TranslateContext.Provider>;
}

export function useTranslate() {
  return useContext(TranslateContext);
}
