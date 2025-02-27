import { useState, useEffect, useCallback } from 'react';

const useRecaptchaV3 = (siteKey) => {
  const [isRecaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    if (window.grecaptcha) {
      setRecaptchaReady(true);
    } else {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => setRecaptchaReady(true);
    }
  }, [siteKey]);

  const executeRecaptcha = useCallback(async (action = "submit") => {
    if (isRecaptchaReady && window.grecaptcha) {
      return await window.grecaptcha.execute(siteKey, { action });
    }
    return null;
  }, [isRecaptchaReady, siteKey]);

  return executeRecaptcha;
};

export default useRecaptchaV3;
