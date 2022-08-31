import React from 'react';
import styled from 'styled-components';
import { TextFooter, TextFooterProps } from '../../../text/TextFooter';

export interface FooterCopyrightProps extends TextFooterProps {}

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper>
      <TextWrapper>
        <Date size={'tiny'} isWrapped={false} {...props}>
          © 2022&nbsp;
        </Date>
        <Name size={'tiny'} isWrapped={false} {...props}>
          ELSON LIANG
        </Name>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const Date = styled(TextFooter)`
  text-align: left;
`;

const Name = styled(TextFooter)`
  flex-basis: 0;
  flex-grow: 1;

  text-align: left;
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
