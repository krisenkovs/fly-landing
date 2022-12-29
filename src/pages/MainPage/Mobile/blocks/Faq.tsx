import { useSettings } from 'application/SettingsProvider';
import { Box, Typography } from 'components';
import { Collapse } from 'components/Collapse';
import { COLORS } from 'constant';
import React from 'react';

export function Faq() {
  const settings = useSettings();
  return (
    <Box
      backgroundColor={COLORS.PALE_BLUE}
      paddingTop={40}
      paddingBottom={40}
      alignItems="center"
      id="faq"
      paddingRight={12}
      paddingLeft={12}
    >
      <Typography size={24} lineHeight={32} weight={900} color={COLORS.BLACK} textAlign="center">
        {settings?.faq.title}
      </Typography>
      <Box marginTop={16}>
        {settings?.faq.items.map((item, index) => (
          <Box marginTop={8} key={index}>
            <Collapse
              title={
                <Typography size={16} lineHeight={24} weight={600} color={COLORS.BLUE}>
                  {item.title}
                </Typography>
              }
              content={item.content}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
