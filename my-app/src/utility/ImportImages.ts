interface IImageManager {
  get: (src: string) => string;
}

function ImageManager(this: IImageManager, imageList: ImageList) {
  this.get = (src: string) => {
    const image = imageList[src];
    if (image === undefined) throw 'Invalid image: ' + src;
    return image;
  };
}

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
  importAll(
    require.context('../assets/spotlight-assets', false, /\.(png|jpe?g|svg)$/)
  )
);

export const ProjectsImages = new (ImageManager as any)(
  importAll(
    require.context('../assets/projects-assets', false, /\.(png|jpe?g|svg)$/)
  )
);
