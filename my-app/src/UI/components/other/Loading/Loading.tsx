import { Modal } from '../../layout/Modal';

import styled, { keyframes } from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { FadeIn } from '../FadeIn/FadeIn';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  isVisible,
  ...props
}: LoadingProps) => {
  return (
    <StyledModal isVisible={isVisible} {...props}>
      <Wrapper>
        <Row>
          <FadeIn isLoaded={isVisible} delay={100}>
            <MonoText>ELSON LIANG</MonoText>
          </FadeIn>
          <FadeIn isLoaded={isVisible} delay={200}>
            <NormalText>/</NormalText>
          </FadeIn>
          <FadeIn isLoaded={isVisible} delay={300}>
            <NormalText>Portfolio</NormalText>
          </FadeIn>
        </Row>
        {isVisible && <Square />}
      </Wrapper>
    </StyledModal>
  );
};

const Animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledModal = styled(Modal)`
  transition-duration: ${({ theme }) => theme.speed.loading}ms;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.backgroundOpposite};
  user-select: none;
`;

const MonoText = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-weight: ${({ theme }) => theme.font.mono.weight.semiBold};
  letter-spacing: ${({ theme }) => theme.font.mono.letterSpacing.button};

  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.small};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.default};`)}
`;

const NormalText = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.background};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.small};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.default};`)}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Square = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin: 20px;
  width: 8px;
  height: 8px;

  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: ${({ theme }) => theme.speed.normal}ms;
  animation-name: ${Animation};
  background-color: ${({ theme }) => theme.color.background};
`;
