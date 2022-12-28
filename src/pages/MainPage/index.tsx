import { Desktop } from 'pages/MainPage/Desktop';
import { Mobile } from 'pages/MainPage/Mobile';
import React, { useEffect, useState } from 'react';

export function MainPage() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    function resize() {
      if (window.innerWidth < 1260) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return isMobile ? <Mobile /> : <Desktop />;
}
