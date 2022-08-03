import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { LessThan } from '../../../utility/ResponsiveCSS';

export interface ProjectSectionFactProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactElement | string;
}

export const ProjectSectionFact: React.FC<ProjectSectionFactProps> = ({
  label,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Label>{label}</Label>
      <Content>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Label = styled(Paragraph)`
  box-sizing: border-box;

  width: 50%;
  padding-right: 20px;
  ${LessThan(
    600,
    `
    width: 100%;
    padding-right: 0px;
  `
  )}

  color: ${({ theme }) => theme.colors.textPassive2};
  font-size: ${({ theme }) => theme.font.size.tiny};
  letter-spacing: ${({ theme }) => theme.font.spacing.button};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  overflow: hidden;
  text-overflow: ellipsis;
`;

const Content = styled.div`
  width: 50%;
  ${LessThan(
    600,
    `
    width: 100%;
  `
  )}
`;

const Text = styled(Paragraph)`
  width: 100%;
  font-weight: ${({ theme }) => theme.font.weight.bold2};

  overflow: hidden;
  text-overflow: ellipsis;
`;
