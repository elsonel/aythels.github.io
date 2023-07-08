interface ImageManager {
  get: (src: string) => string;
  getSrcSet: (src: string) => string;
}

interface ImageList {
  [src: string]: string;
}

function ImageManager(this: ImageManager, imageList: ImageList) {
  this.get = (src: string) => {
    const image = imageList[src];
    if (image === undefined) console.error('Invalid image: ' + src);
    return image;
  };

  this.getSrcSet = (src: string) => {
    return `
      ${this.get(`${src}_640.png`)} 640w,
      ${this.get(`${src}_1280.png`)} 1280w,
      ${this.get(`${src}_1920.png`)} 1920w,
      ${this.get(`${src}_2560.png`)} 2560w,
  `;
  };
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

export const VisualArtsImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/visualarts-assets', false, /\.(png|jpe?g|svg)$/)
  )
);

//

export const PortfolioImages = new (ImageManager as any)(
  importAll(require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/))
);

export const SpotlightImages = new (ImageManager as any)(
  importAll(require.context('../assets/spotlight', false, /\.(png|jpe?g|svg)$/))
);

//

export const FoldPavilionImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/foldpavilion', false, /\.(png|jpe?g|svg)$/)
  )
);

export const KineticBoardwalkImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/kineticboardwalk', false, /\.(png|jpe?g|svg)$/)
  )
);

export const BasiliskTowerImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/basilisktower', false, /\.(png|jpe?g|svg)$/)
  )
);
