import { IGalleryEntry } from '../../components/GalleryGrid';
import { GridBreakpoint } from '../../UI/components/layout/Grid';
import { UIUXImages } from 'utility/ImportImages';

export const Breakpoints: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
    columnCount: 3,
  },
  {
    minWidth: 1000,
    columnCount: 4,
  },
];

export const Data: IGalleryEntry[] = [
  {
    date: new Date(2020, 8),
    subtitle: '2020 College + Amazon Creative Jam',
    title: 'PORTFOL.IO',
    src: UIUXImages.get('Portfolio2560.jpg'),
    srcSet: `
      ${UIUXImages.get('Portfolio320.jpg')} 320w,
      ${UIUXImages.get('Portfolio640.jpg')} 640w,
      ${UIUXImages.get('Portfolio960.jpg')} 960w,
      ${UIUXImages.get('Portfolio1280.jpg')} 1280w,
      ${UIUXImages.get('Portfolio1600.jpg')} 1600w,
      ${UIUXImages.get('Portfolio1920.jpg')} 1920w,
      ${UIUXImages.get('Portfolio2240.jpg')} 2240w,
      ${UIUXImages.get('Portfolio2560.jpg')} 2560w,
    `,
    to: '/gallery/portfolio',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020 College + Netflix Creative Jam',
    title: 'SPOTLIGHT',
    src: UIUXImages.get('Spotlight2560.jpg'),
    srcSet: `
      ${UIUXImages.get('Spotlight320.jpg')} 320w,
      ${UIUXImages.get('Spotlight640.jpg')} 640w,
      ${UIUXImages.get('Spotlight960.jpg')} 960w,
      ${UIUXImages.get('Spotlight1280.jpg')} 1280w,
      ${UIUXImages.get('Spotlight1600.jpg')} 1600w,
      ${UIUXImages.get('Spotlight1920.jpg')} 1920w,
      ${UIUXImages.get('Spotlight2240.jpg')} 2240w,
      ${UIUXImages.get('Spotlight2560.jpg')} 2560w,
    `,
    to: '/gallery/spotlight',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020 College + Netflix Creative Jam',
    title: 'SPOTLIGHT a',
    src: UIUXImages.get('Spotlight2560.jpg'),
    srcSet: `
      ${UIUXImages.get('Spotlight320.jpg')} 320w,
      ${UIUXImages.get('Spotlight640.jpg')} 640w,
      ${UIUXImages.get('Spotlight960.jpg')} 960w,
      ${UIUXImages.get('Spotlight1280.jpg')} 1280w,
      ${UIUXImages.get('Spotlight1600.jpg')} 1600w,
      ${UIUXImages.get('Spotlight1920.jpg')} 1920w,
      ${UIUXImages.get('Spotlight2240.jpg')} 2240w,
      ${UIUXImages.get('Spotlight2560.jpg')} 2560w,
    `,
    to: '/gallery/spotlight',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020 College + Netflix Creative Jam',
    title: 'SPOTLIGHT f',
    src: UIUXImages.get('Spotlight2560.jpg'),
    srcSet: `
      ${UIUXImages.get('Spotlight320.jpg')} 320w,
      ${UIUXImages.get('Spotlight640.jpg')} 640w,
      ${UIUXImages.get('Spotlight960.jpg')} 960w,
      ${UIUXImages.get('Spotlight1280.jpg')} 1280w,
      ${UIUXImages.get('Spotlight1600.jpg')} 1600w,
      ${UIUXImages.get('Spotlight1920.jpg')} 1920w,
      ${UIUXImages.get('Spotlight2240.jpg')} 2240w,
      ${UIUXImages.get('Spotlight2560.jpg')} 2560w,
    `,
    to: '/gallery/spotlight',
  },
];
