import { Item } from './Item';
import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Steps() {
  return (
    <Box
      paddingRight={182}
      paddingLeft={182}
      paddingTop={80}
      paddingBottom={80}
      flexDirection="row"
      alignItems="center"
    >
      <img src="images/phone.png" height={680} width={600} alt="phone" />
      <Box marginLeft={80}>
        <Typography color={COLORS.BLACK} size={48} lineHeight={56} weight={900}>
          Начни зарядку в пару кликов
        </Typography>
        <Box marginTop={40}>
          <Item step="1" text="Поиск свободных зарядных станций" />
        </Box>
        <Box marginTop={40}>
          <Item step="2" text="Безопасные платежи" />
        </Box>
        <Box marginTop={40}>
          <Item step="3" text="Управление зарядной сессией" />
        </Box>
        <Box marginTop={40}>
          <Item step="4" text='Зарядка до "полного бака"' />
        </Box>
        <Box marginTop={40}>
          <Item step="5" text="Щадящий режим зарядки" />
        </Box>
      </Box>
    </Box>
  );
}
