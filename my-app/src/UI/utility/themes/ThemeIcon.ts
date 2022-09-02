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
  logo: IconSVGType;
  Linkedin: IconSVGType;
  Github: IconSVGType;
  Email: IconSVGType;
  DropdownChevron: IconSVGType;
  modalClose: IconSVGType;
  modalRight: IconSVGType;
  modalLeft: IconSVGType;
}

export interface ThemeIconInterface {
  icon: IconInterface;
}

export const ThemeIcon: ThemeIconInterface = {
  icon: {
    logo: '/example/logo.svg',
    Linkedin: Linkedin,
    Github: Github,
    Email: Email,
    DropdownChevron: ChevronUpDown,
    modalClose: Close,
    modalRight: ArrowRight,
    modalLeft: ArrowLeft,
  },
};
