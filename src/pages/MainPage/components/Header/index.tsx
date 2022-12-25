import { Box, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Header() {
  function handleLinkClick(id: string) {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <Box
      paddingTop={14}
      paddingBottom={14}
      paddingLeft={182}
      paddingRight={182}
      backgroundColor={COLORS.WHITE}
      flexDirection="row"
      alignItems="center"
      gap={80}
    >
      <img src="images/logo.png" alt="logo" height={32} width={152} />
      <Box flex={1} />
      <TouchableOpacity onPress={() => handleLinkClick('info')}>
        <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
          Главная
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkClick('map')}>
        <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
          Карта
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkClick('faq')}>
        <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
          FAQ
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLinkClick('tariff')}>
        <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
          Тарифы
        </Typography>
      </TouchableOpacity>
    </Box>
  );
}
