export const pxToMm = (pixels, ppi = window.devicePixelRatio * 96) =>
  pixels * (25.4 / ppi);

export const mmToPx = (mm, ppi = window.devicePixelRatio * 96) =>
  mm * (ppi / 25.4);
