import React, { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';

export type Settings = {
  menu: {
    info: string;
    map: string;
    faq: string;
    tariff: string;
  };
  info: {
    title: string;
    description1: string;
    description2: string;
    action: string;
    applicationUrl: string;
  };
  steps: {
    title: string;
    items: string[];
  };
  map: {
    title: string;
    stations: {
      lat: number;
      lng: number;
      name: string;
      address: string;
      connectors: string;
      power: string;
    }[];
  };
  help: {
    title: string;
    description: string;
    action: string;
    mail: string;
  };
  faq: {
    title: string;
    items: { title: string; content: string }[];
  };
  tariff: {
    title: string;
    items: {
      value: string;
      measure: string;
      description: string;
    }[];
  };
  subscribe: {
    title: string;
    description: string;
    action: string;
    placeholder: string;
  };
  footer: {
    mail: string;
    phone: string;
    address: string;
    bank: string;
    copyright: string;
  };
};

const SettingsContext = createContext<Settings | undefined>(undefined);

export function SettingsProvider({ children }: PropsWithChildren) {
  const [settings, setSettings] = useState<Settings>();

  useEffect(() => {
    fetch('/static/settings.json')
      .then((response) => response.json())
      .then((data) => setSettings(data));
  }, []);

  return <SettingsContext.Provider value={settings}>{settings && children}</SettingsContext.Provider>;
}

export function useSettings() {
  return useContext(SettingsContext);
}
