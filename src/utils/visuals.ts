export const processSizeFactor = (minSize: number, maxSize: number, sizeFactor: number) => (
  (1 - sizeFactor) * minSize + sizeFactor * maxSize
);

export const calculateImageSize = (imageWidth: number, imageHeight: number, size: number) => {
  const ratio = imageHeight / imageWidth;

  return imageWidth > imageHeight ?
    { width: size, height: size * ratio } :
    { width: size / ratio, height: size };
};
