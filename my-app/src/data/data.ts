export interface GallerySortable {
  date: Date;
  title: string;
}

export interface GalleryEntry extends GallerySortable {
  date: Date;
  subtitle: string;
  title: string;
  src: string;
}

export interface GalleryVisualArtsEntry extends GalleryEntry {
  caption: string;
  width: number;
  height: number;
}

export interface GalleryProjectEntry extends GalleryEntry {
  to: string;
}

export const _GalleryVisualArtsData: GalleryVisualArtsEntry[] = [
  {
    date: new Date(2022, 4),
    subtitle: '2022',
    title: 'NIGHT SKIRMISHES',
    src: '/images/visualarts/Night_Skirmishes.png',
    caption: 'Digital painting',
    width: 2040,
    height: 2600,
  },
  {
    date: new Date(2020, 5),
    subtitle: '2020',
    title: 'CORRUPTION',
    src: '/images/visualarts/Corruption.png',
    caption: 'Photo manipulation',
    width: 2448,
    height: 3264,
  },
  {
    date: new Date(2019, 1),
    subtitle: '2019',
    title: 'MEMORY',
    src: '/images/visualarts/Memory.png',
    caption: 'Watercolor',
    width: 1900,
    height: 2520,
  },
  {
    date: new Date(2018, 9),
    subtitle: '2018',
    title: 'FOCUS',
    src: '/images/visualarts/Focus.png',
    caption: 'Watercolor',
    width: 2170,
    height: 3058,
  },
  {
    date: new Date(2018, 8),
    subtitle: '2018',
    title: 'STORM',
    src: '/images/visualarts/Storm.png',
    caption: 'Acrylic on canvas',
    width: 2000,
    height: 2870,
  },
  {
    date: new Date(2018, 3),
    subtitle: '2017',
    title: 'REACH',
    src: '/images/visualarts/Reach.png',
    caption: 'Photography',
    width: 2339,
    height: 2930,
  },
  {
    date: new Date(2018, 2),
    subtitle: '2018',
    title: 'AMETHYST CITY',
    src: '/images/visualarts/Amethyst_City.png',
    caption: 'Acrylic on canvas',
    width: 2900,
    height: 2360,
  },
];

export const _GalleryUIUXData: GalleryProjectEntry[] = [
  {
    date: new Date(2020, 8),
    subtitle: '2020',
    title: 'PORTFOL.IO',
    src: '/images/uiux/Portfolio.png',
    to: '/portfolio',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020',
    title: 'SPOTLIGHT',
    src: '/images/uiux/Spotlight.png',
    to: '/spotlight',
  },
];

export const _GalleryArchitectureData: GalleryProjectEntry[] = [
  {
    date: new Date(2022, 5),
    subtitle: '2022',
    title: 'FOLD PAVILION',
    src: '/images/architecture/Fold_Pavilion.png',
    to: '/foldpavilion',
  },
  {
    date: new Date(2020, 11),
    subtitle: 'Drifting Landscapes',
    title: 'KINETIC BOARDWALK',
    src: '/images/architecture/Kinetic_Boardwalk.png',
    to: '/kineticboardwalk',
  },
  {
    date: new Date(2019, 4),
    subtitle: '2019',
    title: 'BASILISK TOWER',
    src: '/images/architecture/Basilisk_Tower.png',
    to: 'basilisktower',
  },
];

export function sortByDate(arr: GallerySortable[], decending: boolean = true) {
  const copy = [...arr];

  decending
    ? copy.sort((a, b) => b.date.valueOf() - a.date.valueOf())
    : copy.sort((a, b) => a.date.valueOf() - b.date.valueOf());

  return copy;
}

export function sortByName(arr: GallerySortable[], decending: boolean = true) {
  const copy = [...arr];

  decending
    ? copy.sort((a, b) => a.title.localeCompare(b.title))
    : copy.sort((a, b) => b.title.localeCompare(a.title));

  return copy;
}
