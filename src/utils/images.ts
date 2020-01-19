import sha1 from 'sha1';

export interface IImage {
  checksum: string;
  url: string;
  width: number;
  height: number;
}

export const readSingleImage = (file, maxSize: number): Promise<IImage> => {
  return new Promise<IImage>((resolve, reject) => {
    const r = new FileReader();

    r.onload = async (e) => {
      resolve(await processImage(e.target.result as string, maxSize));
    };

    r.onerror = (e) => {
      reject(e);
    };

    r.readAsDataURL(file);
  });
};

export const readMultipleImages = async (files, maxSize: number): Promise<IImage[]> => {
  const images = [];

  for (let i = 0; i < files.length; i++) {
    images.push(await readSingleImage(files[i], maxSize));
  }

  return images;
}

export const processImage = (originalUrl: string, maxSize: number): Promise<IImage> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  return new Promise((resolve) => {
    const img = new Image();

    img.onload = function () {
      if (img.height <= maxSize && img.width <= maxSize) {
        const url = originalUrl;
        const checksum = sha1(url);
        const { width, height } = img;
        resolve({ url, checksum, width, height });
        return;
      }

      if (img.height > img.width) {
        canvas.height = maxSize
        canvas.width = (img.width / img.height) * canvas.height;
      } else {
        canvas.width = maxSize
        canvas.height = (img.height / img.width) * canvas.width;
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const url = canvas.toDataURL();
      const checksum = sha1(url);
      const { width, height } = canvas;

      resolve({ url, checksum, width, height });
    }

    img.src = originalUrl;
  });
};
