// src/utils/useStoreRedirect.ts
import { useCallback } from 'react';

export function useStoreRedirect() {
  const androidUrl = 'https://play.google.com/store/apps/details?id=your.app.id';
  const iosUrl     = 'https://apps.apple.com/app/idYOUR_APP_ID';
  const webUrl     = 'https://captainTrack.ng/download';

  const redirectToStore = useCallback(() => {
    let isAndroid = false;
    let isIOS     = false;

    // 1) Prefer Client Hints if available
    const uaData = (navigator as any).userAgentData;
    if (uaData && typeof uaData === 'object') {
      const { platform, mobile } = uaData as {
        platform: string;
        mobile: boolean;
      };
      isAndroid = mobile && /Android/i.test(platform);
      isIOS     = mobile && /iOS|iPhone|iPad|iPod/i.test(platform);
    } else {
      // 2) Fallback to userAgent string
      const ua = navigator.userAgent || '';
      isAndroid = /Android/i.test(ua);
      isIOS     = /iPhone|iPad|iPod/i.test(ua);
    }

    if (isAndroid) {
      window.location.href = androidUrl;
    } else if (isIOS) {
      window.location.href = iosUrl;
    } else {
      window.location.href = webUrl;
    }
  }, [androidUrl, iosUrl, webUrl]);

  return redirectToStore;
}
