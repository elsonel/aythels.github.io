import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { Close } from '@styled-icons/zondicons/Close';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { ArrowLeft } from '@styled-icons/zondicons/ArrowLeft';

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
  modalRight: IconSVGType;
  modalLeft: IconSVGType;
}

export interface ImageInterface {
  profile: string;
  exampleSmall: string;
  exampleSquare: string;
  exampleLandscape: string;
  examplePortrait: string;
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
    modalRight: ArrowRight,
    modalLeft: ArrowLeft,
  },
  image: {
    profile: '/images/profile.png',
    exampleSmall: '/images/examples/small.jpg',
    exampleSquare: '/images/examples/square.jpg',
    exampleLandscape: '/images/examples/landscape.jpg',
    examplePortrait: '/images/examples/portrait.jpg',
  },
};
