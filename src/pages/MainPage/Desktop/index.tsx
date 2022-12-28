import { Box } from 'components';
import { Faq } from 'pages/MainPage/Desktop/blocks/Faq';
import { Footer } from 'pages/MainPage/Desktop/blocks/Footer';
import { Header } from 'pages/MainPage/Desktop/blocks/Header';
import { Help } from 'pages/MainPage/Desktop/blocks/Help';
import { Info } from 'pages/MainPage/Desktop/blocks/Info';
import { Map } from 'pages/MainPage/Desktop/blocks/Map';
import { Steps } from 'pages/MainPage/Desktop/blocks/Steps';
import { Subscribe } from 'pages/MainPage/Desktop/blocks/Subscribe';
import { Tariff } from 'pages/MainPage/Desktop/blocks/Tariff';
import React from 'react';

export function Desktop() {
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
