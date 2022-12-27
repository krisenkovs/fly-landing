import { useSettings } from 'application/SettingsProvider';
import { Box, Typography } from 'components';
import { Collapse } from 'components/Collapse';
import { COLORS } from 'constant';
import React from 'react';

export function Faq() {
  const settings = useSettings();
  return (
    <Box backgroundColor={COLORS.PALE_BLUE} paddingTop={80} paddingBottom={80} alignItems="center" id="faq">
      <Box width={970}>
        <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLACK} textAlign="center">
          {settings?.faq.title}
        </Typography>
        {settings?.faq.items.map((item, index) => (
          <Box marginTop={40} key={index}>
            <Collapse title={item.title} content={item.content} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
