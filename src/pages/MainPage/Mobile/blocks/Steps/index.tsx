import { useSettings } from 'application/SettingsProvider';
import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import { Container } from 'pages/MainPage/Desktop/components/Container';
import { Item } from 'pages/MainPage/Mobile/blocks/Steps/Item';
import React from 'react';

export function Steps() {
  const settings = useSettings();
  return (
    <Container>
      <Box paddingTop={40} paddingBottom={40} alignItems="center" paddingLeft={12} paddingRight={12}>
        <Typography color={COLORS.BLACK} size={24} lineHeight={32} weight={900} textAlign="center">
          {settings?.steps?.title}
        </Typography>
        <Box>
          {settings?.steps?.items?.map((item, index) => (
            <Box marginTop={24} key={index}>
              <Item step={`${index + 1}`} text={item} />
            </Box>
          ))}
        </Box>

        <Box marginTop={24}>
          <img src="images/phone.png" height={285} width={250} alt="phone" />
        </Box>
      </Box>
    </Container>
  );
}
