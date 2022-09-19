import { Modal } from '../../layout/Modal';
import { IconLoading } from '../../atoms/IconLoading';
import styled from 'styled-components';
import { TextButton } from '../../text/TextButton';
import { clamp } from '../../../utility/scripts/Math';

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
    <Wrapper isVisible={isVisible} {...props}>
      <IconLoading size={24} />
      <TextButton size="tiny">
        {`LOADING ${progress !== undefined ? progress + '%' : ''}`}
      </TextButton>
    </Wrapper>
  );
};

const Wrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.color.background};
`;
