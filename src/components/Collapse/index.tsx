import { Box } from 'components/Box';
import { TouchableOpacity } from 'components/TouchableOpacity';
import { Typography } from 'components/Typography';
import { COLORS } from 'constant';
import React, { useState } from 'react';

type Props = {
  title: string;
  content: string;
};

export function Collapse({ title, content }: Props) {
  const [expanded, setExpanded] = useState(false);

  function handlePress() {
    return setExpanded((prev) => !prev);
  }

  return (
    <Box
      borderRadius={12}
      paddingBottom={12}
      paddingTop={12}
      paddingLeft={24}
      paddingRight={24}
      backgroundColor={COLORS.WHITE}
    >
      <TouchableOpacity onPress={handlePress}>
        <Box flexDirection="row" alignItems="center">
          <Box flex={1}>
            <Typography size={24} lineHeight={36} weight={600} color={COLORS.BLUE}>
              {title}
            </Typography>
          </Box>
          {expanded ? (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.8167 24.5167C29.4667 23.8667 29.4667 22.8167 28.8167 22.1667L21.1667 14.5167C20.5167 13.8667 19.4667 13.8667 18.8167 14.5167L11.1667 22.1667C10.5167 22.8167 10.5167 23.8667 11.1667 24.5167C11.8167 25.1667 12.8667 25.1667 13.5167 24.5167L20 18.05L26.4667 24.5167C27.1167 25.1667 28.1834 25.15 28.8167 24.5167Z"
                fill="#005EEB"
              />
            </svg>
          ) : (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1833 15.4833C10.5333 16.1333 10.5333 17.1833 11.1833 17.8333L18.8333 25.4833C19.4833 26.1333 20.5333 26.1333 21.1833 25.4833L28.8333 17.8333C29.4833 17.1833 29.4833 16.1333 28.8333 15.4833C28.1833 14.8333 27.1333 14.8333 26.4833 15.4833L20 21.95L13.5333 15.4833C12.8833 14.8333 11.8166 14.85 11.1833 15.4833Z"
                fill="#656A71"
              />
            </svg>
          )}
        </Box>
      </TouchableOpacity>

      {expanded && (
        <Box marginTop={12}>
          <Typography size={16} lineHeight={24} weight={400} color={COLORS.BLACK}>
            {content}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
