import { Box } from 'components/index';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export function Container({ children }: Props) {
  return (
    <Box flexDirection="row" justifyContent="center">
      <Box flex={1} style={{ maxWidth: '1376px' }} marginLeft={16} marginRight={16}>
        {children}
      </Box>
    </Box>
  );
}
