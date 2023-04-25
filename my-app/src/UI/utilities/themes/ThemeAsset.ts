import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { Close } from '@styled-icons/zondicons/Close';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { ArrowLeft } from '@styled-icons/zondicons/ArrowLeft';
import { ChevronBack } from '@styled-icons/ionicons-sharp/ChevronBack';
import { ChevronForward } from '@styled-icons/ionicons-sharp/ChevronForward';

export type IconSVGType =
  | string
  | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;

export interface IconInterface {
  exampleIconBasic: string;
  exampleIconThin: string;
  exampleIconColored: string;
  logo: IconSVGType;
  Linkedin: IconSVGType;
  Github: IconSVGType;
  Email: IconSVGType;
  DropdownChevron: IconSVGType;
  modalClose: IconSVGType;
  modalLeft: IconSVGType;
  modalRight: IconSVGType;
}

export interface ImageInterface {
  profile: string;
  exampleSmall: string;
  exampleSquare: string;
  exampleSquareSmall: string;
  exampleLandscape: string;
  exampleLandscape2: string;
  exampleLandscape3: string;
  exampleLandscape4: string;
  exampleLandscape5: string;
  exampleLandscape6: string;
  examplePortrait: string;
  examplePortrait2: string;
  examplePortrait3: string;
  examplePortrait4: string;
  examplePortrait5: string;
  examplePortrait6: string;
}

export interface ThemeAssetInterface {
  icon: IconInterface;
  image: ImageInterface;
}

export const ThemeAsset: ThemeAssetInterface = {
  icon: {
    logo: '/images/logo.svg',
    exampleIconBasic: '/images/examples/logo.svg',
    exampleIconThin: '/images/examples/arrow.svg',
    exampleIconColored: '/images/examples/Photoshop.svg',
    Linkedin: Linkedin,
    Github: Github,
    Email: Email,
    DropdownChevron: ChevronUpDown,
    modalClose: Close,
    modalLeft: ChevronBack,
    modalRight: ChevronForward,
  },
  image: {
    profile: '/images/profile.png',
    exampleSmall: '/images/examples/small.jpg',
    exampleSquare: '/images/examples/square.jpg',
    exampleSquareSmall: '/images/examples/squareSmall.png',
    exampleLandscape: '/images/examples/landscape.jpg',
    exampleLandscape2: '/images/examples/landscape2.jpg',
    exampleLandscape3: '/images/examples/landscape3.jpg',
    exampleLandscape4: '/images/examples/landscape4.jpg',
    exampleLandscape5: '/images/examples/landscape5.jpg',
    exampleLandscape6: '/images/examples/landscape6.jpg',
    examplePortrait: '/images/examples/portrait.jpg',
    examplePortrait2: '/images/examples/portrait2.jpg',
    examplePortrait3: '/images/examples/portrait3.jpg',
    examplePortrait4: '/images/examples/portrait4.jpg',
    examplePortrait5: '/images/examples/portrait5.jpg',
    examplePortrait6: '/images/examples/portrait6.jpg',
  },
};
