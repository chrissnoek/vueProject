export const resizeImage = (imagePath, size) => {
  console.log(imagePath);
  const image = imagePath && imagePath.replace('media/games/',`media/resize/${size}/-/games/`);
  return image;
}
