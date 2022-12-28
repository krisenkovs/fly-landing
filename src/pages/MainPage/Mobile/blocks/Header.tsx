import { useSettings } from 'application/SettingsProvider';
import { Box, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React, { useState, useMemo, CSSProperties } from 'react';
import { CrossIcon, Logo, MenuIcon } from 'svg';

export function Header() {
  const [open, setOpen] = useState(false);
  const settings = useSettings();

  function handleLinkClick(id: string) {
    const element = document.getElementById(id);
    setOpen(false);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleMenuClick() {
    setOpen((prev) => !prev);
  }

  const style = useMemo(() => {
    return {
      position: 'absolute',
      left: 0,
      top: '56px',
      right: 0,
      bottom: 0,
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.1s ease-out',
      zIndex: 1,
    } as CSSProperties;
  }, [open]);

  return (
    <>
      <Box
        paddingTop={14}
        paddingBottom={14}
        paddingLeft={12}
        paddingRight={12}
        backgroundColor={COLORS.WHITE}
        flexDirection="row"
        alignItems="center"
        //position="fixed"
        //style={{ width: '100%' }}
      >
        <Box width={24} position="absolute" style={{ left: 12, top: 19 }}>
          <TouchableOpacity onPress={handleMenuClick}>{open ? <CrossIcon /> : <MenuIcon />}</TouchableOpacity>
        </Box>
        <Box flex={1} />
        <Logo width={128} height={28} />
        <Box flex={1} />
      </Box>
      <Box
        style={style}
        backgroundColor={COLORS.BLUE}
        paddingBottom={40}
        paddingTop={40}
        paddingRight={12}
        paddingLeft={12}
        overflow="hidden"
        gap={40}
      >
        <TouchableOpacity onPress={() => handleLinkClick('info')}>
          <Typography color={COLORS.WHITE} size={24} lineHeight={30} weight={500}>
            {settings?.menu.info}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('map')}>
          <Typography color={COLORS.WHITE} size={24} lineHeight={30} weight={500}>
            {settings?.menu.map}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('faq')}>
          <Typography color={COLORS.WHITE} size={24} lineHeight={30} weight={500}>
            {settings?.menu.faq}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('tariff')}>
          <Typography color={COLORS.WHITE} size={24} lineHeight={30} weight={500}>
            {settings?.menu.tariff}
          </Typography>
        </TouchableOpacity>
      </Box>
    </>
  );
}
