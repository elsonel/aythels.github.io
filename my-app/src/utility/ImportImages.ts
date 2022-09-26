interface ImageList {
  [src: string]: string;
}

// const images = importAll(require.context('../assets/visualarts-assets', false, /\.(png|jpe?g|svg)$/))
// <img src={images['doggy.png']} />
function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: ImageList = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export const VisualArtsImages = importAll(
  require.context('../assets/visualarts-assets', false, /\.(png|jpe?g|svg)$/)
);
