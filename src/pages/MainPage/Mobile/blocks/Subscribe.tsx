import { useSettings } from 'application/SettingsProvider';
import { Box, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Subscribe() {
  const settings = useSettings();
  return (
    <Box
      alignItems="center"
      backgroundColor={COLORS.LIGHT_BLUE}
      paddingTop={40}
      paddingBottom={40}
      paddingLeft={12}
      paddingRight={12}
    >
      <Typography size={24} lineHeight={32} weight={900} color={COLORS.BLUE} textAlign="center">
        {settings?.subscribe.title}
      </Typography>
      <Box marginTop={16}>
        <Typography size={16} lineHeight={24} weight={400} color={COLORS.BLACK} textAlign="center">
          {settings?.subscribe.description}
        </Typography>
      </Box>
      <Box
        marginTop={24}
        paddingLeft={2}
        paddingBottom={2}
        paddingRight={2}
        style={{ minWidth: '290px' }}
        backgroundColor={COLORS.WHITE}
        borderRadius={12}
        overflow="hidden"
      >
        <input
          style={{ fontSize: '16px', lineHeight: '24px', border: 'none', outline: 'none', padding: '16px' }}
          placeholder={settings?.subscribe.placeholder}
        />
        <TouchableOpacity>
          <Box
            alignItems="center"
            justifyContent="center"
            borderRadius={12}
            paddingTop={16}
            paddingBottom={16}
            paddingLeft={32}
            paddingRight={32}
            backgroundColor={COLORS.BLUE}
          >
            <Typography size={18} lineHeight={24} weight={700} color={COLORS.WHITE}>
              {settings?.subscribe.action}
            </Typography>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
