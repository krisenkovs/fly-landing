import { useSettings } from 'application/SettingsProvider';
import { Box, Link, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Help() {
  const settings = useSettings();
  return (
    <Box flexDirection="row" alignItems="center">
      <img src="images/station.png" alt="station" height={400} width={814} />
      <Box>
        <Typography size={36} lineHeight={46} weight={700} color={COLORS.BLACK}>
          {settings?.help.title}
        </Typography>
        <Box marginTop={16}>
          <Typography size={24} lineHeight={30} weight={700} color={COLORS.BLACK}>
            {settings?.help.description}
          </Typography>
        </Box>
        <Box marginTop={32} flexDirection="row">
          <Link href={`mailto:${settings?.help?.mail}`}>
            <Box
              alignItems="center"
              justifyContent="center"
              borderRadius={12}
              paddingTop={16}
              paddingBottom={16}
              paddingLeft={80}
              paddingRight={80}
              backgroundColor={COLORS.BLUE}
            >
              <Typography size={18} lineHeight={24} weight={700} color={COLORS.WHITE}>
                {settings?.help.action}
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
