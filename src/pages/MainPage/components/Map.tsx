import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import GoogleMapReact from 'google-map-react';
import React from 'react';

export function Map() {
  return (
    <Box
      id="map"
      backgroundColor={COLORS.PALE_BLUE}
      paddingLeft={182}
      paddingRight={182}
      paddingTop={80}
      paddingBottom={80}
      flexDirection="row"
      gap={80}
      alignItems="center"
    >
      <Box>
        <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLACK}>
          Карта станций
        </Typography>
        <Box flexDirection="row" alignItems="center" gap={16} marginTop={40}>
          <Box
            height={56}
            width={56}
            borderRadius={56}
            backgroundColor={COLORS.WHITE}
            alignItems="center"
            justifyContent="center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 21.75C4.5 21.3358 4.83579 21 5.25 21H18.75C19.1642 21 19.5 21.3358 19.5 21.75C19.5 22.1642 19.1642 22.5 18.75 22.5H5.25C4.83579 22.5 4.5 22.1642 4.5 21.75Z"
                fill="#005EEB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.5C10.7574 7.5 9.75 8.50736 9.75 9.75C9.75 10.9926 10.7574 12 12 12C13.2426 12 14.25 10.9926 14.25 9.75C14.25 8.50736 13.2426 7.5 12 7.5ZM8.25 9.75C8.25 7.67893 9.92893 6 12 6C14.0711 6 15.75 7.67893 15.75 9.75C15.75 11.8211 14.0711 13.5 12 13.5C9.92893 13.5 8.25 11.8211 8.25 9.75Z"
                fill="#005EEB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25 7.95979 5.25 9.75C5.25 12.855 6.98389 15.6822 8.81595 17.7891C9.72283 18.832 10.6316 19.6729 11.3139 20.2528C11.5837 20.4821 11.8172 20.6699 12 20.8125C12.1828 20.6699 12.4163 20.4821 12.6861 20.2528C13.3684 19.6729 14.2772 18.832 15.184 17.7891C17.0161 15.6822 18.75 12.855 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3ZM12 21.75C11.5699 22.3644 11.5697 22.3643 11.5695 22.3641L11.5688 22.3637L11.5671 22.3624L11.5615 22.3585L11.5425 22.345C11.5263 22.3334 11.5031 22.3167 11.4736 22.2952C11.4144 22.252 11.3294 22.189 11.2223 22.1071C11.0081 21.9434 10.7049 21.7038 10.3424 21.3957C9.61838 20.7803 8.65217 19.8867 7.68405 18.7734C5.76611 16.5678 3.75 13.395 3.75 9.75C3.75 7.56196 4.61919 5.46354 6.16637 3.91637C7.71354 2.36919 9.81196 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.25 13.395 18.2339 16.5678 16.316 18.7734C15.3478 19.8867 14.3816 20.7803 13.6576 21.3957C13.2951 21.7038 12.9919 21.9434 12.7777 22.1071C12.6706 22.189 12.5856 22.252 12.5264 22.2952C12.4969 22.3167 12.4737 22.3334 12.4575 22.345L12.4385 22.3585L12.4329 22.3624L12.4312 22.3637L12.4305 22.3641C12.4303 22.3643 12.4301 22.3644 12 21.75ZM12 21.75L12.4301 22.3644C12.1719 22.5452 11.8281 22.5452 11.5699 22.3644L12 21.75Z"
                fill="#005EEB"
              />
            </svg>
          </Box>
          <Box>
            <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
              Станция
            </Typography>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center" gap={16} marginTop={32}>
          <Box
            height={56}
            width={56}
            borderRadius={56}
            backgroundColor={COLORS.WHITE}
            alignItems="center"
            justifyContent="center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3425 0.832744C15.6408 0.985833 15.8012 1.31831 15.7354 1.64709L14.3605 8.52169L19.7634 10.5478C19.9978 10.6357 20.1729 10.8348 20.2302 11.0786C20.2874 11.3224 20.2192 11.5787 20.0483 11.7617L9.5483 23.0117C9.31953 23.2569 8.95586 23.3203 8.65757 23.1673C8.35927 23.0142 8.19882 22.6817 8.26458 22.3529L9.6395 15.4783L4.23667 13.4522C4.0022 13.3643 3.82708 13.1652 3.76986 12.9214C3.71263 12.6776 3.78086 12.4213 3.95172 12.2383L14.4517 0.988262C14.6805 0.743149 15.0442 0.679654 15.3425 0.832744ZM5.81373 12.4416L10.7634 14.2978C11.1076 14.4269 11.3076 14.7865 11.2354 15.1471L10.2533 20.058L18.1863 11.5584L13.2367 9.70225C12.8924 9.57314 12.6925 9.21347 12.7646 8.85291L13.7468 3.94196L5.81373 12.4416Z"
                fill="#005EEB"
              />
            </svg>
          </Box>
          <Box>
            <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
              Информация
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box height={600} flex={1} borderRadius={20} overflow="hidden">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627,
          }}
          defaultZoom={10}
        ></GoogleMapReact>
      </Box>
    </Box>
  );
}
