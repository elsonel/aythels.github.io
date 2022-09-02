import React from 'react';
import styled from 'styled-components';
import { IIconSVGProps } from '../../atoms/IIconSVG';
import { ParagraphProps } from '../../text/Paragraph';

export interface RowIconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement<ParagraphProps>;
  icon?: React.ReactElement<IIconSVGProps>;
  gap?: number;
}

export const RowIconText: React.FC<RowIconTextProps> = ({
  children,
  icon,
  gap = 0,
  ...props
}): React.ReactElement => {
  return (
    <Row $gap={gap} {...props}>
      {icon && icon}
      {children && children}
    </Row>
  );
};

const Row = styled.div<{ $gap: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: ${({ $gap }) => $gap}px;
`;
