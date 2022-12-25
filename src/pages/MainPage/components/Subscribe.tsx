import { Box, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Subscribe() {
  return (
    <Box position="relative" alignItems="center" backgroundColor={COLORS.LIGHT_BLUE}>
      <img src="images/circle.png" alt="circle" />
      <Box
        position="absolute"
        alignItems="center"
        justifyContent="center"
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLUE} textAlign="center">
          Оставайтесь в курсе
        </Typography>
        <Box marginTop={16}>
          <Typography size={20} lineHeight={24} weight={400} color={COLORS.BLACK} textAlign="center">
            Не пропусти информацию о новых акциях и скидках
          </Typography>
        </Box>
        <Box
          marginTop={40}
          paddingLeft={16}
          paddingBottom={2}
          paddingRight={2}
          paddingTop={2}
          flexDirection="row"
          alignItems="center"
          backgroundColor={COLORS.WHITE}
          borderRadius={12}
        >
          <input
            style={{ fontSize: '18px', lineHeight: '24px', border: 'none', outline: 'none', minWidth: '400px' }}
            placeholder="Введите email"
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
                Подписаться
              </Typography>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
}
