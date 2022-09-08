import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { TwoColumn, TwoColumnProps } from '../../layout/TwoColumn';

export interface ProjectSectionFactProps extends TwoColumnProps {
  label: string;
  value: React.ReactNode;
  isAlwaysWrapped?: boolean;
}

export const ProjectSectionFact: React.FC<ProjectSectionFactProps> = ({
  label,
  value,
  isAlwaysWrapped,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper
      $isAlwaysWrapped={isAlwaysWrapped}
      breakIfLessThan={600}
      {...props}
    >
      <Label isWrapped={false}>{label}</Label>
      {typeof value === 'string' ? <Text>{value}</Text> : value}
    </Wrapper>
  );
};

const Wrapper = styled(TwoColumn)<{ $isAlwaysWrapped?: boolean }>`
  width: 100%;
  column-gap: 20px;

  ${({ $isAlwaysWrapped }) => $isAlwaysWrapped && `flex-wrap: wrap;`}
`;

const Label = styled(Paragraph)`
  color: ${({ theme }) => theme.color.textNeutral};
  font-size: ${({ theme }) => theme.font.size.tiny};
  letter-spacing: ${({ theme }) => theme.font.spacing.button};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Text = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
