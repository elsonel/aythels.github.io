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
    if (image === undefined) throw new Error('Invalid image: ' + src);
    return image;
  };

  this.getSrcSet = (src: string) => {
    return `
      ${this.get(`${src}_320.jpg`)} 320w,
      ${this.get(`${src}_640.jpg`)} 640w,
      ${this.get(`${src}_960.jpg`)} 960w,
      ${this.get(`${src}_1280.jpg`)} 1280w,
      ${this.get(`${src}_1600.jpg`)} 1600w,
      ${this.get(`${src}_1920.jpg`)} 1920w,
      ${this.get(`${src}_2240.jpg`)} 2240w,
      ${this.get(`${src}_2560.jpg`)} 2560w,
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

export const UIUXImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/uiux-assets', false, /\.(png|jpe?g|svg)$/)
  )
);

export const ArchitectureImages = new (ImageManager as any)(
  importAll(
    require.context(
      '../assets/architecture-assets',
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

//

export const KineticBoardwalkImages = new (ImageManager as any)(
  importAll(
    require.context(
      '../assets/kineticboardwalk-assets',
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

export const BasiliskTowerImages = new (ImageManager as any)(
  importAll(
    require.context(
      '../assets/basilisktower-assets',
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

export const FoldPavilionImages = new (ImageManager as any)(
  importAll(
    require.context(
      '../assets/foldpavilion-assets',
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

//

export const PortfolioImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/portfolio-assets', false, /\.(png|jpe?g|svg)$/)
  )
);

export const SpotlightImages = new (ImageManager as any)(
  importAll(require.context('../assets/spotlight', false, /\.(png|jpe?g|svg)$/))
);

export const ProjectsImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/projects-assets', false, /\.(png|jpe?g|svg)$/)
  )
);
