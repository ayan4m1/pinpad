import { useMemo } from 'react';

export const pxToMm = (pixels, ppi = (window?.devicePixelRatio || 1) * 96) =>
  pixels * (25.4 / ppi);

export const mmToPx = (mm, ppi = (window?.devicePixelRatio || 1) * 96) =>
  mm * (ppi / 25.4);

export const useTextWidth = (text) =>
  useMemo(() => {
    const fragment = document.createDocumentFragment();
    const canvas = document.createElement('canvas');

    fragment.appendChild(canvas);
    const context = canvas.getContext('2d');

    return context.measureText(text).width;
  }, [text]);
