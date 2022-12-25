import { Box, Typography } from 'components';
import { Collapse } from 'components/Collapse';
import { COLORS } from 'constant';
import React from 'react';

export function Faq() {
  return (
    <Box backgroundColor={COLORS.PALE_BLUE} paddingTop={80} paddingBottom={80} alignItems="center" id="faq">
      <Box width={970}>
        <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLACK} textAlign="center">
          FAQ
        </Typography>
        <Box marginTop={40}>
          <Collapse
            title="Как начать процесс зарядки?"
            content="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений 
в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей."
          />
        </Box>
      </Box>
    </Box>
  );
}
