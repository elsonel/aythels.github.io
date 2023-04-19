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
    modalLeft: ChevronBack,
    modalRight: ChevronForward,
  },
  image: {
    profile: '/images/profile.png',
    exampleSmall: '/images/examples/small.jpg',
    exampleSquare: '/images/examples/square.jpg',
    exampleSquareSmall: '/images/examples/squareSmall.png',
    exampleLandscape: '/images/examples/landscape.jpg',
    examplePortrait: '/images/examples/portrait.jpg',
  },
};
