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
  const { color, speed } = useTheme();
  const setMetaBackgroundColor = useMetaBackground();

  useEffect(() => {
    isVisible && setMetaBackgroundColor(color.backgroundOpposite);
  }, [color, isVisible, setMetaBackgroundColor]);

  useEffect(() => {
    if (!onVisibleComplete || !isVisible) return;

    const timeout = setTimeout(() => {
      onVisibleComplete();
    }, speed.normal);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible, onVisibleComplete, speed]);

  return (
    <StyledModal isVisible={isVisible} {...props}>
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
