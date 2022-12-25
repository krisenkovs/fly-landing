import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Tariff() {
  return (
    <Box backgroundColor={COLORS.WHITE} paddingTop={80} paddingBottom={80} alignItems="center" id="tariff">
      <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLACK} textAlign="center">
        Тарифы
      </Typography>
      <Box marginTop={40} flexDirection="row" gap={16}>
        <Box
          borderRadius={12}
          paddingTop={40}
          paddingBottom={40}
          flex={1}
          style={{ minWidth: '500px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }}
          alignItems="center"
        >
          <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLUE} textAlign="center">
            0.42
          </Typography>
          <Box marginTop={8}>
            <Typography size={24} lineHeight={32} weight={400} color={COLORS.BLUE} textAlign="center">
              руб./кВт*ч
            </Typography>
          </Box>
          <Box marginTop={24}>
            <Typography size={24} lineHeight={32} weight={400} color={COLORS.BLACK} textAlign="center">
              Зарядка постоянным током (DC)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
