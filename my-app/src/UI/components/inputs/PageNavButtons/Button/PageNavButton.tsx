/*
import styled, { useTheme } from 'styled-components';
import { Theme } from '../../../../utility/themes/Theme';
import { IIconSVG } from '../../../atoms/IIconSVG';
import { Button, ButtonProps } from '../../Button';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

const ICON_SIZE = 24;

export interface PageNavButtonProps extends ButtonProps {
  children?: string;
  direction: 'LEFT' | 'RIGHT';
}

export const PageNavButton: React.FC<PageNavButtonProps> = ({
  children,
  direction,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();

  return (
    <StyledButton
      border={color.outline}
      borderHovered={color.text}
      color={color.transparentWhite}
      {...props}
    >
      {direction === 'RIGHT' && children && <Text>{children}</Text>}
      <IIconSVG
        size={ICON_SIZE}
        color="inherit"
        src={
          direction === 'LEFT' ? Theme.icon.modalLeft : Theme.icon.modalRight
        }
      />
      {direction === 'LEFT' && children && <Text>{children}</Text>}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  padding: ${({ theme }) => (theme.size.headerHeight - ICON_SIZE - 2) / 2}px;
  min-width: ${({ theme }) => theme.size.headerHeight}px;
  height: ${({ theme }) => theme.size.headerHeight}px;

  color: ${({ theme }) => theme.color.textNeutral};

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: inherit;
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  margin: 0px 10px;
`;
*/

import styled, { useTheme } from 'styled-components';
import { Theme } from '../../../../utility/themes/Theme';
import { IIconSVG } from '../../../atoms/IIconSVG';
import { ButtonProps } from '../../Button';
import { ButtonReverse } from '../../ButtonReverse';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

const ICON_SIZE = 24;

export interface PageNavButtonProps extends ButtonProps {
  children?: string;
  direction: 'LEFT' | 'RIGHT';
}

export const PageNavButton: React.FC<PageNavButtonProps> = ({
  children,
  direction,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();

  return (
    <StyledButton
      border={color.outline}
      borderHovered={color.text}
      color={color.transparentWhite}
      colorHovered={color.text}
      {...props}
    >
      {direction === 'RIGHT' && children && <Text>{children}</Text>}
      <IIconSVG
        size={ICON_SIZE}
        color="inherit"
        src={
          direction === 'LEFT' ? Theme.icon.modalLeft : Theme.icon.modalRight
        }
      />
      {direction === 'LEFT' && children && <Text>{children}</Text>}
    </StyledButton>
  );
};

const StyledButton = styled(ButtonReverse)`
  padding: ${({ theme }) => (theme.size.headerHeight - ICON_SIZE - 2) / 2}px;
  min-width: ${({ theme }) => theme.size.headerHeight}px;
  height: ${({ theme }) => theme.size.headerHeight}px;

  color: ${({ theme }) => theme.color.text};

  &:hover {
    color: ${({ theme }) => theme.color.background};
  }
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: inherit;
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  margin: 0px 10px;
`;
