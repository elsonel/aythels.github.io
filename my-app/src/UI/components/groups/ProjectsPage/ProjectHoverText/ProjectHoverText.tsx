import React from 'react';
import styled, { useTheme } from 'styled-components';
import useType from '../../../../utilities/hooks/useType';
import { zeroPad } from '../../../../utilities/scripts/zeroPad';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IProjectHoverTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  number?: number;
}

export const ProjectHoverText: React.FC<IProjectHoverTextProps> = ({
  children = '',
  number,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  const textColor = number === undefined ? color.text : color.primary;
  const title = useType(number === undefined ? `ABOUT` : zeroPad(number, 3));

  return (
    <TextWrapper {...props}>
      <LineTextLabel color={textColor}>// {title}</LineTextLabel>
      <br />
      <LineText color={textColor}>{children}</LineText>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  overflow: hidden;
  width: 200px;
  height: 240px;
`;

const LineTextLabel = styled(Paragraph)`
  width: 100%;

  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const LineText = styled(Paragraph)`
  width: 100%;
  transition: ${({ theme }) => theme.speed.normal}ms;
`;
