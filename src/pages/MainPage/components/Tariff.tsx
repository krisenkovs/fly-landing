import { useSettings } from 'application/SettingsProvider';
import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Tariff() {
  const settings = useSettings();
  return (
    <Box backgroundColor={COLORS.WHITE} paddingTop={80} paddingBottom={80} alignItems="center" id="tariff">
      <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLACK} textAlign="center">
        {settings?.tariff.title}
      </Typography>
      <Box marginTop={40} flexDirection="row" gap={16}>
        {settings?.tariff.items.map((item, index) => (
          <Box
            borderRadius={12}
            paddingTop={40}
            paddingBottom={40}
            flex={1}
            style={{ minWidth: '500px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }}
            alignItems="center"
            key={index}
          >
            <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLUE} textAlign="center">
              {item.value}
            </Typography>
            <Box marginTop={8}>
              <Typography size={24} lineHeight={32} weight={400} color={COLORS.BLUE} textAlign="center">
                {item.measure}
              </Typography>
            </Box>
            <Box marginTop={24}>
              <Typography size={24} lineHeight={32} weight={400} color={COLORS.BLACK} textAlign="center">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
