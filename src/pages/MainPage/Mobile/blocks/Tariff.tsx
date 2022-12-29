import { useSettings } from 'application/SettingsProvider';
import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Tariff() {
  const settings = useSettings();
  return (
    <Box
      backgroundColor={COLORS.WHITE}
      paddingTop={40}
      paddingBottom={40}
      alignItems="center"
      id="tariff"
      paddingRight={12}
      paddingLeft={12}
    >
      <Typography size={24} lineHeight={32} weight={900} color={COLORS.BLACK} textAlign="center">
        {settings?.tariff.title}
      </Typography>
      <Box marginTop={24} flexDirection="row" gap={16}>
        {settings?.tariff.items.map((item, index) => (
          <Box
            borderRadius={12}
            paddingTop={24}
            paddingBottom={24}
            paddingRight={12}
            paddingLeft={12}
            flex={1}
            style={{ minWidth: '290px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }}
            alignItems="center"
            key={index}
          >
            <Typography size={32} lineHeight={40} weight={900} color={COLORS.BLUE} textAlign="center">
              {item.value}
            </Typography>
            <Box marginTop={8}>
              <Typography size={16} lineHeight={28} weight={400} color={COLORS.BLUE} textAlign="center">
                {item.measure}
              </Typography>
            </Box>
            <Box marginTop={16}>
              <Typography size={18} lineHeight={24} weight={400} color={COLORS.BLACK} textAlign="center">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
