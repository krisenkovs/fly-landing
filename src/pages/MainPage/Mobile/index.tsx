import { Box } from 'components';
import { Header } from 'pages/MainPage/Mobile/blocks/Header';
import { Info } from 'pages/MainPage/Mobile/blocks/Info';
import { Steps } from 'pages/MainPage/Mobile/blocks/Steps';
import React from 'react';

export function Mobile() {
  return (
    <Box position="relative" style={{ minHeight: '100%' }}>
      <Header />
      <Box overflow="auto">
        <Info />
        <Steps />
      </Box>
    </Box>
  );
}
