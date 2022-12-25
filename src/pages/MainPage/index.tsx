import { Header } from './components/Header';
import { Main } from './components/Main';
import { Box } from 'components';
import { Faq } from 'pages/MainPage/components/Faq';
import { Help } from 'pages/MainPage/components/Help';
import { Map } from 'pages/MainPage/components/Map';
import { Subscribe } from 'pages/MainPage/components/Subscribe';
import { Tariff } from 'pages/MainPage/components/Tariff';
import React from 'react';

export function MainPage() {
  return (
    <Box overflow="auto">
      <Header />
      <Main />
      <Map />
      <Help />
      <Faq />
      <Tariff />
      <Subscribe />
    </Box>
  );
}
