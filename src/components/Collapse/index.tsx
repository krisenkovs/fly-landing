import styles from './styles.module.css';
import { Box } from 'components/Box';
import { TouchableOpacity } from 'components/TouchableOpacity';
import { Typography } from 'components/Typography';
import { COLORS } from 'constant';
import React, { useState, useMemo, useRef } from 'react';

type Props = {
  title: React.ReactElement;
  content: string;
};

export function Collapse({ title, content }: Props) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  function handlePress() {
    return setExpanded((prev) => !prev);
  }

  const style = useMemo(() => {
    return { maxHeight: expanded ? ref?.current?.clientHeight : 0 };
  }, [expanded]);
  const styleIcon = useMemo(() => {
    return { transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' };
  }, [expanded]);

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
          <div style={styleIcon} className={styles.icon}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1833 15.4833C10.5333 16.1333 10.5333 17.1833 11.1833 17.8333L18.8333 25.4833C19.4833 26.1333 20.5333 26.1333 21.1833 25.4833L28.8333 17.8333C29.4833 17.1833 29.4833 16.1333 28.8333 15.4833C28.1833 14.8333 27.1333 14.8333 26.4833 15.4833L20 21.95L13.5333 15.4833C12.8833 14.8333 11.8166 14.85 11.1833 15.4833Z"
                fill="#656A71"
              />
            </svg>
          </div>
        </Box>
      </TouchableOpacity>

      <Box overflow="hidden" style={style} className={styles.content}>
        <Box refContainer={ref}>
          <Box marginTop={12}>
            <Typography size={16} lineHeight={24} weight={400} color={COLORS.BLACK} style={{ whiteSpace: 'pre-line' }}>
              {content}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
