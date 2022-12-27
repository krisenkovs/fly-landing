import { useSettings } from 'application/SettingsProvider';
import { Box, Container, Typography } from 'components';
import { COLORS } from 'constant';
import { Item } from 'pages/MainPage/components/Steps/Item';
import React from 'react';

export function Steps() {
  const settings = useSettings();
  return (
    <Container>
      <Box paddingTop={80} paddingBottom={80} flexDirection="row" alignItems="center">
        <img src="images/phone.png" height={686} width={600} alt="phone" />
        <Box marginLeft={80}>
          <Typography color={COLORS.BLACK} size={48} lineHeight={56} weight={900}>
            {settings?.steps?.title}
          </Typography>
          {settings?.steps?.items?.map((item, index) => (
            <Box marginTop={40} key={index}>
              <Item step={`${index + 1}`} text={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
