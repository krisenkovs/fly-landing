import { useSettings } from 'application/SettingsProvider';
import { Box, Container, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect, useMemo } from 'react';
import { Lighting, MapPin } from 'svg';

function Marker({ onClick }: { lat: number; lng: number; onClick?: () => void }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Lighting />
    </TouchableOpacity>
  );
}

export function Map() {
  const settings = useSettings();
  const [selectedStation, setSelectedStation] = useState<number | undefined>();

  useEffect(() => {
    setSelectedStation(0);
  }, [settings?.map.stations]);

  const station: Record<string, string> = useMemo(
    () => (selectedStation !== undefined ? settings?.map.stations[selectedStation] : {}) || {},
    [selectedStation],
  );

  return (
    <Box id="map" backgroundColor={COLORS.PALE_BLUE}>
      <Container>
        <Box paddingTop={80} paddingBottom={80} flexDirection="row" gap={80} alignItems="center">
          <Box>
            <Typography size={48} lineHeight={56} weight={900} color={COLORS.BLACK}>
              {settings?.map.title}
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
                <MapPin />
              </Box>
              <Box>
                <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
                  {station?.name}
                </Typography>
                <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
                  {station?.address}
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
                <Lighting />
              </Box>
              <Box>
                <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
                  Коннекторы: <b>{station.connectors}</b>
                </Typography>
                <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
                  Мощность: <b>{station.power}</b>
                </Typography>
                <Typography size={18} lineHeight={26} weight={500} color={COLORS.BLACK}>
                  Быстрая зарядка: <b>Да</b>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box height={600} flex={1} borderRadius={20} overflow="hidden">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={{
                lat: 59.955413,
                lng: 30.33784,
              }}
              defaultZoom={10}
            >
              {settings?.map?.stations?.map((item, index) => (
                <Marker lat={item.lat} lng={item.lng} key={index} onClick={() => setSelectedStation(index)} />
              ))}
            </GoogleMapReact>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
