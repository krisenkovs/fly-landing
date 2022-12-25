import { Box, Link, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Info() {
  return (
    <Box backgroundColor={COLORS.BLUE} flexDirection="row" position="relative" id="info">
      <Box flex={1} />
      <img src="images/car.png" alt="car" height={700} />
      <Box position="absolute" style={{ left: 0, top: 0, bottom: 0 }} paddingLeft={182} justifyContent="center">
        <Typography size={64} lineHeight={90} weight={900} color={COLORS.WHITE}>
          BatteryFly - Get the power
        </Typography>
        <Box marginTop={40}>
          <Typography size={36} lineHeight={46} weight={400} color={COLORS.WHITE}>
            Сеть скоростных зарядных станций
          </Typography>
          <Typography size={36} lineHeight={46} weight={400} color={COLORS.WHITE}>
            с собственным приложением
          </Typography>
        </Box>
        <Box marginTop={40} flexDirection="row">
          <Link href="https://batteryfly.io">
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
                Попробовать
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
