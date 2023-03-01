import { useSettings } from 'application/SettingsProvider';
import { Box, Link, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';
import {
  ApplePay,
  BelCard,
  BelCardInternet,
  BePaid,
  Facebook,
  GooglePay,
  IDCheck,
  Instagram,
  Logo,
  Mail,
  MasterCard,
  Mir,
  Phone,
  SamsungPay,
  Visa,
  VisaSecure,
} from 'svg';

export function Footer() {
  const settings = useSettings();
  function handleLinkClick(id: string) {
    if (id === 'offer') {
      window.open('https://batteryfly.by/files/public_offer.pdf');
    } else {
      const element = document.getElementById(id);
      element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <Box paddingTop={40} paddingBottom={40} paddingLeft={12} paddingRight={12} alignItems="center" gap={40}>
        <Logo />
        <Box alignItems="center" gap={20}>
          <TouchableOpacity onPress={() => handleLinkClick('info')}>
            <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
              {settings?.menu.info}
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLinkClick('faq')}>
            <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
              {settings?.menu.faq}
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkClick('tariff')}>
            <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
              {settings?.menu.tariff}
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkClick('offer')}>
            <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
              {settings?.menu.offer}
            </Typography>
          </TouchableOpacity>
        </Box>
        <Box flexDirection="row" gap={40}>
          <a href="https://instagram.com/batteryfly.by" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <Facebook />
        </Box>
        <Box gap={24}>
          <Link href={`tel:${settings?.footer.phone}`}>
            <Box flexDirection="row" alignItems="center" gap={20}>
              <Phone />
              <Typography size={16} lineHeight={24} weight={700} color={COLORS.BLUE}>
                {settings?.footer.phone}
              </Typography>
            </Box>
          </Link>
          <Link href={`mailto:${settings?.footer.mail}`}>
            <Box flexDirection="row" alignItems="center" gap={20}>
              <Mail />
              <Typography size={16} lineHeight={24} weight={700} color={COLORS.BLUE}>
                {settings?.footer.mail}
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        backgroundColor={COLORS.PALE_BLUE}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        paddingTop={24}
        paddingBottom={24}
        paddingLeft={12}
        paddingRight={12}
      >
        <a href="https://bepaid.by" target="_blank" rel="noreferrer">
          <Box
            backgroundColor={COLORS.PALE_BLUE}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap={40}
            style={{ flexWrap: 'wrap' }}
          >
            <BePaid />
            <GooglePay />
            <ApplePay />
            <SamsungPay />
            <Visa />
            <Mir />
            <VisaSecure />
            <MasterCard />
            <IDCheck />
            <BelCard />
            <BelCardInternet />
          </Box>
        </a>
      </Box>
      <Box paddingTop={40} paddingBottom={40} alignItems="center" paddingRight={12} paddingLeft={12} gap={14}>
        <Typography size={14} lineHeight={20} weight={400} color={COLORS.BLACK} textAlign="center">
          {settings?.footer.address}
        </Typography>
        <Typography size={14} lineHeight={20} weight={400} color={COLORS.BLACK} textAlign="center">
          {settings?.footer.bank}
        </Typography>
        <Typography size={14} lineHeight={20} weight={400} color={COLORS.BLACK} textAlign="center">
          {settings?.footer.copyright}
        </Typography>
      </Box>
    </>
  );
}
