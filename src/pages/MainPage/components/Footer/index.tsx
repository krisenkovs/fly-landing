import { Box, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

export function Footer() {
  function handleLinkClick(id: string) {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <Box paddingTop={60} paddingBottom={60} paddingLeft={182} paddingRight={182}>
        <Box flexDirection="row" alignItems="flex-start" gap={80}>
          <Box flexDirection="row" alignItems="center" flex={1}>
            <img src="images/logo.png" alt="logo" height={32} width={152} />
            <Box flex={1} marginLeft={80} flexDirection="row" gap={80}>
              <TouchableOpacity onPress={() => handleLinkClick('info')}>
                <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
                  Главная
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLinkClick('map')}>
                <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
                  Карта
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLinkClick('faq')}>
                <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
                  FAQ
                </Typography>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLinkClick('tariff')}>
                <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
                  Тарифы
                </Typography>
              </TouchableOpacity>
            </Box>
            <Box flexDirection="row" gap={24}>
              <img src="images/instagram.png" alt="instagram" />
              <img src="images/twitter.png" alt="twitter" />
              <img src="images/facebook.png" alt="facebook" />
            </Box>
            <Box></Box>
          </Box>
          <Box gap={20}>
            <Box flexDirection="row" alignItems="center" gap={20}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.425 12.6625C17.1932 11.8912 14.7665 11.8956 12.5375 12.675C12.3748 12.7316 12.2295 12.8292 12.1156 12.9584C12.0017 13.0876 11.9232 13.244 11.8875 13.4125L11.1625 17.1C11.1282 17.2636 11.0545 17.4163 10.9478 17.5448C10.841 17.6733 10.7045 17.7738 10.55 17.8375L4.63749 20.2C4.43637 20.2834 4.21336 20.2979 4.00312 20.2414C3.79288 20.1849 3.60722 20.0605 3.47499 19.8875C2.58182 18.7334 2.13989 17.2934 2.23192 15.8369C2.32396 14.3805 2.94365 13.0075 3.97499 11.975C7.16507 8.7874 11.4903 6.99683 16 6.99683C20.5097 6.99683 24.8349 8.7874 28.025 11.975C29.0563 13.0075 29.676 14.3805 29.7681 15.8369C29.8601 17.2934 29.4182 18.7334 28.525 19.8875C28.3928 20.0605 28.2071 20.1849 27.9969 20.2414C27.7866 20.2979 27.5636 20.2834 27.3625 20.2L21.45 17.8375C21.297 17.775 21.1614 17.6764 21.0548 17.5502C20.9481 17.4239 20.8736 17.2738 20.8375 17.1125L20.0625 13.4C20.0291 13.2324 19.9528 13.0764 19.8411 12.9471C19.7293 12.8179 19.586 12.7198 19.425 12.6625V12.6625Z"
                  stroke="#005EEB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M5 25H27" stroke="#005EEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <Typography size={16} lineHeight={24} weight={700} color={COLORS.BLUE}>
                +375 29 613 26 28
              </Typography>
            </Box>
            <Box flexDirection="row" alignItems="center" gap={20}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                  stroke="#005EEB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 7L16 18L4 7"
                  stroke="#005EEB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Typography size={16} lineHeight={24} weight={700} color={COLORS.BLUE}>
                bytteryfly@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        backgroundColor={COLORS.PALE_BLUE}
        height={72}
        paddingLeft={182}
        paddingRight={182}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        gap={80}
        paddingTop={24}
        paddingBottom={24}
      >
        <img src="images/visa.png" alt="visa" />
        <img src="images/mir.png" alt="mir" />
      </Box>
      <Box paddingLeft={182} paddingRight={182} paddingTop={60} paddingBottom={60} alignItems="center">
        <Typography size={16} lineHeight={34} weight={400} color={COLORS.BLACK}>
          ООО «Электрохиз» 220073, г.Минск, ул.Ольшевского, д.24, пом.7а, каб.7а-1-89
        </Typography>
        <Typography size={16} lineHeight={34} weight={400} color={COLORS.BLACK}>
          УНП 193625615, р/сч BY83 AKBB 3012 0000 2298 2000 0000 Банк ОАО «АСБ Беларусбанк», код банка AKBBBY2X
        </Typography>
        <Box marginTop={12}>
          <Typography size={16} lineHeight={34} weight={400} color={COLORS.BLACK}>
            © BatteryFly 2023
          </Typography>
        </Box>
      </Box>
    </>
  );
}
