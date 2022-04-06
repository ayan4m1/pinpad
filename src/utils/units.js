import { useMemo } from 'react';

export const pxToMm = (
  pixels,
  ppi = typeof window !== 'undefined' ? window.devicePixelRatio * 96 : 96
) => pixels * (25.4 / ppi);

export const mmToPx = (
  mm,
  ppi = typeof window !== 'undefined' ? window.devicePixelRatio * 96 : 96
) => mm * (ppi / 25.4);

export const useTextWidth = (text) =>
  useMemo(() => {
    if (typeof document === 'undefined') {
      return 0;
    }

    const fragment = document.createDocumentFragment();
    const canvas = document.createElement('canvas');

    fragment.appendChild(canvas);
    const context = canvas.getContext('2d');

    return context.measureText(text).width;
  }, [text]);
