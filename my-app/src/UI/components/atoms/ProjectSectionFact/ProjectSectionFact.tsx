import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { LessThan } from '../../../utility/ResponsiveCSS';

export interface ProjectSectionFactProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
}

export const ProjectSectionFact: React.FC<ProjectSectionFactProps> = ({
  label,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content>
        <Label isWrapped={false}>{label}</Label>
      </Content>
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
  justify-content: space-between;
`;

const Content = styled.div`
  width: calc(50% - 10px);
  ${LessThan(
    600,
    `
    width: 100%;
  `
  )}
`;

const Label = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textPassive2};
  font-size: ${({ theme }) => theme.font.size.tiny};
  letter-spacing: ${({ theme }) => theme.font.spacing.button};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Text = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
