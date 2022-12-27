import { useSettings } from 'application/SettingsProvider';
import { Box, Container, Link, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Info() {
  const settings = useSettings();
  return (
    <Box backgroundColor={COLORS.BLUE} flexDirection="row" position="relative" id="info" justifyContent="flex-end">
      <img src="images/car.png" alt="car" height={778} width={1144} />
      <Box position="absolute" style={{ left: 0, top: 0, bottom: 0, right: 0 }} justifyContent="center">
        <Container>
          <Typography size={64} lineHeight={90} weight={900} color={COLORS.WHITE}>
            {settings?.info?.title}
          </Typography>
          <Box marginTop={40}>
            <Typography size={36} lineHeight={46} weight={400} color={COLORS.WHITE}>
              {settings?.info?.description1}
            </Typography>
            <Typography size={36} lineHeight={46} weight={400} color={COLORS.WHITE}>
              {settings?.info?.description2}
            </Typography>
          </Box>
          <Box marginTop={40} flexDirection="row">
            <Link href={settings?.info?.applicationUrl || ''}>
              <Box
                alignItems="center"
                justifyContent="center"
                borderRadius={12}
                paddingTop={16}
                paddingBottom={16}
                paddingLeft={80}
                paddingRight={80}
                backgroundColor={COLORS.WHITE}
              >
                <Typography size={18} lineHeight={24} weight={700} color={COLORS.BLUE}>
                  {settings?.info?.action}
                </Typography>
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
