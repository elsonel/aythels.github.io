import { Modal } from '../../layout/Modal';
import { IconLoading } from '../../atoms/IconLoading';
import styled from 'styled-components';
import { TextButton } from '../../text/TextButton';
import { clamp } from '../../../utility/scripts/Math';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  progress?: number;
}

export const Loading: React.FC<LoadingProps> = ({
  isVisible = false,
  progress,
  ...props
}: LoadingProps) => {
  if (progress !== undefined) {
    progress = Math.floor(clamp(progress, 0, 1) * 100);
  }

  return (
    <StyledModal isVisible={isVisible} {...props}>
      <Wrapper>
        <IconLoading size={24} />
        <Text size="tiny">
          {`LOADING ${progress !== undefined ? progress + '%' : ''}`}
        </Text>
      </Wrapper>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  transition: ${({ theme }) => theme.speed.loading}ms;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.color.text};
`;

const Text = styled(Paragraph)`
  color: ${({ theme }) => theme.color.background};
`;
