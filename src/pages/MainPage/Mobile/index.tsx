import { Box } from 'components';
import { Faq } from 'pages/MainPage/Mobile/blocks/Faq';
import { Footer } from 'pages/MainPage/Mobile/blocks/Footer';
import { Header } from 'pages/MainPage/Mobile/blocks/Header';
import { Help } from 'pages/MainPage/Mobile/blocks/Help';
import { Info } from 'pages/MainPage/Mobile/blocks/Info';
import { Map } from 'pages/MainPage/Mobile/blocks/Map';
import { Steps } from 'pages/MainPage/Mobile/blocks/Steps';
import { Subscribe } from 'pages/MainPage/Mobile/blocks/Subscribe';
import { Tariff } from 'pages/MainPage/Mobile/blocks/Tariff';
import React from 'react';

export function Mobile() {
  return (
    <Box position="relative" style={{ minHeight: '100%' }}>
      <Header />
      <Box overflow="auto">
        <Info />
        <Steps />
        <Help />
        <Faq />
        <Tariff />
        <Subscribe />
        <Footer />
      </Box>
    </Box>
  );
}
