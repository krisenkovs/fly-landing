import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

type Props = {
  step: string;
  text: string;
};

export function Item({ step, text }: Props) {
  return (
    <Box flexDirection="row" gap={24} alignItems="center">
      <Box
        width={80}
        height={80}
        borderRadius={40}
        backgroundColor={COLORS.BLUE}
        alignItems="center"
        justifyContent="center"
        position="relative"
        boxSizing="border-box"
        style={{ minWidth: '80px' }}
      >
        <Box position="absolute" style={{ right: 0 }}>
          <Typography color={COLORS.WHITE} size={48} lineHeight={80} weight={900}>
            {step}
          </Typography>
        </Box>
      </Box>
      <Typography color={COLORS.BLACK} size={28} lineHeight={42} weight={600}>
        {text}
      </Typography>
    </Box>
  );
}
