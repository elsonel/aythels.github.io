import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';

type IconType =
  | string
  | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;

export interface IconInterface {
  logo: IconType;
  Linkedin: IconType;
  Github: IconType;
  Email: IconType;
  DropdownChevron: IconType;
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
  },
};
