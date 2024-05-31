import React from 'react';

interface ScreenDimensions {
  width: number;
  height: number;
}

function useScreenDimensions(debounceDelay: number = 100): ScreenDimensions {
  const [screenDimensions, setScreenDimensions] = React.useState<ScreenDimensions>({ width: 0, height: 0 });
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
    let timeoutId: NodeJS.Timeout | null = null;

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setScreenDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, debounceDelay);
    };

    if (typeof window !== 'undefined') {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [debounceDelay]);

  return isClient ? screenDimensions : { width: 0, height: 0 };
}

export default useScreenDimensions;