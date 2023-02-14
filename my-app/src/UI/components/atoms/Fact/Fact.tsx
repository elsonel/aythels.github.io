import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { TwoColumn } from '../../layout/TwoColumn';

export interface FactProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  isAlwaysWrapped?: boolean;
}

export const Fact: React.FC<FactProps> = ({
  label,
  value,
  isAlwaysWrapped,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper breakIfLessThan={isAlwaysWrapped ? undefined : 600} {...props}>
      <Label isWrapped={false}>{label}</Label>
      {typeof value === 'string' ? <Text>{value}</Text> : value}
    </Wrapper>
  );
};

const Wrapper = styled(TwoColumn)`
  width: 100%;
  column-gap: 20px;
`;

const Label = styled(Paragraph)`
  color: ${({ theme }) => theme.color.textNeutral};
  font-size: ${({ theme }) => theme.font.default.size.tiny};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
`;

const Text = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;
