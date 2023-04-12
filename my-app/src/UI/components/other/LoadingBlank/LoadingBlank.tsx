import { Modal } from '../../layout/Modal';
import styled from 'styled-components';

export interface ILoadingBlankProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  onVisibleComplete?: () => void;
}

export const LoadingBlank: React.FC<ILoadingBlankProps> = ({
  isVisible,
  onVisibleComplete,
  ...props
}: ILoadingBlankProps) => {
  return (
    <StyledModal
      isVisible={isVisible}
      onTransitionEnd={() =>
        isVisible && onVisibleComplete && onVisibleComplete()
      }
      {...props}
    >
      <Wrapper />
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  transition-duration: ${({ theme }) => theme.speed.normal}ms;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;
