import { useEffect } from 'react';
import { useMetaBackground } from '../../../utilities/hooks/useMetaBackground';
import { Modal } from '../../layout/Modal';
import styled, { useTheme } from 'styled-components';

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
  const { color } = useTheme();
  const setMetaBackgroundColor = useMetaBackground();

  useEffect(() => {
    isVisible && setMetaBackgroundColor(color.backgroundOpposite);
  }, [color, isVisible, setMetaBackgroundColor]);

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
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;
