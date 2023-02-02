import { useSettings } from 'application/SettingsProvider';
import { Box, Link, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import { Container } from 'pages/MainPage/Desktop/components/Container';
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
  Twitter,
  Visa,
  VisaSecure,
} from 'svg';

export function Footer() {
  const settings = useSettings();
  function handleLinkClick(id: string) {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <Container>
        <Box paddingTop={60} paddingBottom={60}>
          <Box flexDirection="row" alignItems="flex-start" gap={80}>
            <Box flexDirection="row" alignItems="center" flex={1}>
              <Logo />
              <Box flex={1} marginLeft={80} flexDirection="row" gap={80}>
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
              </Box>
              <Box flexDirection="row" gap={24}>
                <Instagram />
                <Twitter />
                <Facebook />
              </Box>
              <Box></Box>
            </Box>
            <Box gap={20}>
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
        </Box>
      </Container>
      <Box
        backgroundColor={COLORS.PALE_BLUE}
        height={72}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        gap={80}
        paddingTop={24}
        paddingBottom={24}
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
      <Box paddingTop={60} paddingBottom={60} alignItems="center">
        <Typography size={16} lineHeight={34} weight={400} color={COLORS.BLACK}>
          {settings?.footer.address}
        </Typography>
        <Typography size={16} lineHeight={34} weight={400} color={COLORS.BLACK}>
          {settings?.footer.bank}
        </Typography>
        <Box marginTop={12}>
          <Typography size={16} lineHeight={34} weight={400} color={COLORS.BLACK}>
            {settings?.footer.copyright}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
