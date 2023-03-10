import { useSettings } from 'application/SettingsProvider';
import { Box, Link, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Info() {
  const settings = useSettings();
  return (
    <Box backgroundColor={COLORS.BLUE} position="relative" id="info" justifyContent="flex-end" paddingLeft={12}>
      <Box alignItems="center" paddingRight={12} paddingTop={32}>
        <Typography size={32} lineHeight={40} weight={900} color={COLORS.WHITE} textAlign="center">
          {settings?.info?.title}
        </Typography>
        <Box marginTop={16}>
          <Typography size={18} lineHeight={26} weight={400} color={COLORS.WHITE} textAlign="center">
            {settings?.info?.description1}
          </Typography>
          <Typography size={18} lineHeight={26} weight={400} color={COLORS.WHITE} textAlign="center">
            {settings?.info?.description2}
          </Typography>
        </Box>
        <Box marginTop={24} flexDirection="row">
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
        </Box>
      </Box>
      <Box alignItems="flex-end">
        <img src="images/car_small.png" alt="car" />
      </Box>
    </Box>
  );
}
