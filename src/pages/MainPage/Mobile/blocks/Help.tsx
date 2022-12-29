import { useSettings } from 'application/SettingsProvider';
import { Box, Link, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Help() {
  const settings = useSettings();
  return (
    <Box alignItems="center" paddingTop={40} paddingBottom={40} paddingLeft={12} paddingRight={12}>
      <Box>
        <Typography size={24} lineHeight={32} weight={700} color={COLORS.BLACK} textAlign="center">
          {settings?.help.title}
        </Typography>
        <Box marginTop={24}>
          <Typography size={16} lineHeight={24} weight={700} color={COLORS.BLACK} textAlign="center">
            {settings?.help.description}
          </Typography>
        </Box>
        <Box marginTop={32}>
          <Link href={`mailto:${settings?.help?.mail}`}>
            <Box
              alignItems="center"
              justifyContent="center"
              borderRadius={12}
              paddingTop={16}
              paddingBottom={16}
              paddingLeft={50}
              paddingRight={50}
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
