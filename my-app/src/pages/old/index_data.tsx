import { VisualArtsImages } from 'utilities/ImportImages';

export type IGalleryEntryArt = {
  date: Date;
  subtitle: string;
  title: string;
  src: string;
  srcSet: string;
  caption: string;
  width: number;
  height: number;
};

export type IGalleryEntry = {
  date: Date;
  subtitle: string;
  title: string;
  src: string;
  srcSet: string;
  to: string;
};

export const VisualArtsData: IGalleryEntryArt[] = [
  {
    date: new Date(2022, 4),
    subtitle: 'Digital Painting',
    title: 'NIGHT SKIRMISHES',
    src: VisualArtsImages.get('NightSkirmishes2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('NightSkirmishes320.jpg')} 320w,
      ${VisualArtsImages.get('NightSkirmishes640.jpg')} 640w,
      ${VisualArtsImages.get('NightSkirmishes960.jpg')} 960w,
      ${VisualArtsImages.get('NightSkirmishes1280.jpg')} 1280w,
      ${VisualArtsImages.get('NightSkirmishes1600.jpg')} 1600w,
      ${VisualArtsImages.get('NightSkirmishes1920.jpg')} 1920w,
      ${VisualArtsImages.get('NightSkirmishes2240.jpg')} 2240w,
      ${VisualArtsImages.get('NightSkirmishes2560.jpg')} 2560w,
    `,
    caption: '2022. Digital painting',
    width: 2040,
    height: 2600,
  },
  {
    date: new Date(2020, 5),
    subtitle: 'Photo Manipulation',
    title: 'CORRUPTION',
    src: VisualArtsImages.get('Corruption2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Corruption320.jpg')} 320w,
      ${VisualArtsImages.get('Corruption640.jpg')} 640w,
      ${VisualArtsImages.get('Corruption960.jpg')} 960w,
      ${VisualArtsImages.get('Corruption1280.jpg')} 1280w,
      ${VisualArtsImages.get('Corruption1600.jpg')} 1600w,
      ${VisualArtsImages.get('Corruption1920.jpg')} 1920w,
      ${VisualArtsImages.get('Corruption2240.jpg')} 2240w,
      ${VisualArtsImages.get('Corruption2560.jpg')} 2560w,
    `,
    caption: '2020. Photo manipulation',
    width: 2448,
    height: 3264,
  },
  {
    date: new Date(2019, 1),
    subtitle: 'Watercolor',
    title: 'MEMORY',
    src: VisualArtsImages.get('Memory2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Memory320.jpg')} 320w,
      ${VisualArtsImages.get('Memory640.jpg')} 640w,
      ${VisualArtsImages.get('Memory960.jpg')} 960w,
      ${VisualArtsImages.get('Memory1280.jpg')} 1280w,
      ${VisualArtsImages.get('Memory1600.jpg')} 1600w,
      ${VisualArtsImages.get('Memory1920.jpg')} 1920w,
      ${VisualArtsImages.get('Memory2240.jpg')} 2240w,
      ${VisualArtsImages.get('Memory2560.jpg')} 2560w,
    `,
    caption: '2019. Watercolor',
    width: 1900,
    height: 2520,
  },
  {
    date: new Date(2018, 9),
    subtitle: 'Watercolor',
    title: 'FOCUS',
    src: VisualArtsImages.get('Focus2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Focus320.jpg')} 320w,
      ${VisualArtsImages.get('Focus640.jpg')} 640w,
      ${VisualArtsImages.get('Focus960.jpg')} 960w,
      ${VisualArtsImages.get('Focus1280.jpg')} 1280w,
      ${VisualArtsImages.get('Focus1600.jpg')} 1600w,
      ${VisualArtsImages.get('Focus1920.jpg')} 1920w,
      ${VisualArtsImages.get('Focus2240.jpg')} 2240w,
      ${VisualArtsImages.get('Focus2560.jpg')} 2560w,
    `,
    caption: '2018. Watercolor',
    width: 2170,
    height: 3058,
  },
  {
    date: new Date(2018, 8),
    subtitle: 'Acrylic on Canvas',
    title: 'STORM',
    src: VisualArtsImages.get('Storm2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Storm320.jpg')} 320w,
      ${VisualArtsImages.get('Storm640.jpg')} 640w,
      ${VisualArtsImages.get('Storm960.jpg')} 960w,
      ${VisualArtsImages.get('Storm1280.jpg')} 1280w,
      ${VisualArtsImages.get('Storm1600.jpg')} 1600w,
      ${VisualArtsImages.get('Storm1920.jpg')} 1920w,
      ${VisualArtsImages.get('Storm2240.jpg')} 2240w,
      ${VisualArtsImages.get('Storm2560.jpg')} 2560w,
    `,
    caption: '2018. Acrylic on canvas',
    width: 2000,
    height: 2870,
  },
  {
    date: new Date(2018, 3),
    subtitle: 'Photography',
    title: 'REACH',
    src: VisualArtsImages.get('Reach2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Reach320.jpg')} 320w,
      ${VisualArtsImages.get('Reach640.jpg')} 640w,
      ${VisualArtsImages.get('Reach960.jpg')} 960w,
      ${VisualArtsImages.get('Reach1280.jpg')} 1280w,
      ${VisualArtsImages.get('Reach1600.jpg')} 1600w,
      ${VisualArtsImages.get('Reach1920.jpg')} 1920w,
      ${VisualArtsImages.get('Reach2240.jpg')} 2240w,
      ${VisualArtsImages.get('Reach2560.jpg')} 2560w,
    `,
    caption: '2017. Photography',
    width: 2339,
    height: 2930,
  },
  {
    date: new Date(2018, 2),
    subtitle: 'Acrylic on Canvas',
    title: 'AMETHYST CITY',
    src: VisualArtsImages.get('AmethystCity2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('AmethystCity320.jpg')} 320w,
      ${VisualArtsImages.get('AmethystCity640.jpg')} 640w,
      ${VisualArtsImages.get('AmethystCity960.jpg')} 960w,
      ${VisualArtsImages.get('AmethystCity1280.jpg')} 1280w,
      ${VisualArtsImages.get('AmethystCity1600.jpg')} 1600w,
      ${VisualArtsImages.get('AmethystCity1920.jpg')} 1920w,
      ${VisualArtsImages.get('AmethystCity2240.jpg')} 2240w,
      ${VisualArtsImages.get('AmethystCity2560.jpg')} 2560w,
    `,
    caption: '2018. Acrylic on canvas',
    width: 2900,
    height: 2360,
  },
];
