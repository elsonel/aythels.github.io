import { Modal } from '../../layout/Modal';
import { IconLoading } from '../../atoms/IconLoading';
import styled from 'styled-components';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  isVisible = false,
  ...props
}: LoadingProps) => {
  return (
    <Wrapper isVisible={isVisible} {...props}>
      <IconLoading />
    </Wrapper>
  );
};

const Wrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
