import { Box, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Help() {
  return (
    <Box flexDirection="row" alignItems="center">
      <img src="images/station.png" alt="station" />
      <Box>
        <Typography size={36} lineHeight={46} weight={700} color={COLORS.BLACK}>
          Бесплатная информационная линия
        </Typography>
        <Box marginTop={16}>
          <Typography size={24} lineHeight={30} weight={700} color={COLORS.BLACK}>
            Техническая поддержка +375 33 564-45-32
          </Typography>
        </Box>
        <Box marginTop={32} flexDirection="row">
          <TouchableOpacity>
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
                Получить консультацию
              </Typography>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
}
