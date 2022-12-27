import { Header } from './components/Header';
import { Box } from 'components';
import { Faq } from 'pages/MainPage/components/Faq';
import { Footer } from 'pages/MainPage/components/Footer';
import { Help } from 'pages/MainPage/components/Help';
import { Info } from 'pages/MainPage/components/Info';
import { Map } from 'pages/MainPage/components/Map';
import { Steps } from 'pages/MainPage/components/Steps';
import { Subscribe } from 'pages/MainPage/components/Subscribe';
import { Tariff } from 'pages/MainPage/components/Tariff';
import React from 'react';

export function MainPage() {
  return (
    <Box overflow="auto">
      <Header />
      <Info />
      <Steps />
      <Map />
      <Help />
      <Faq />
      <Tariff />
      <Subscribe />
      <Footer />
    </Box>
  );
}
