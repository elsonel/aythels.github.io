import styled, { keyframes } from 'styled-components';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  onFinish?: () => void;
  isVisible?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  isVisible = false,
  onFinish,
  ...props
}: LoadingProps) => {
  return (
    <Wrapper onTransitionEnd={onFinish} $isVisible={isVisible} {...props}>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;

  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  user-select: none;
  pointer-events: none;

  background: red;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: 300ms;
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: ${Rotate} 1.1s infinite linear;
  transition: opacity 0.3s;
`;
