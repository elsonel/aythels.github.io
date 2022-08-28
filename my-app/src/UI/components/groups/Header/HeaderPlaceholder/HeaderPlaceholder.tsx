import styled from 'styled-components';
import { HeaderMain } from '../HeaderMain';

export interface HeaderPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderPlaceholder: React.FC<HeaderPlaceholderProps> = ({
  ...props
}: HeaderPlaceholderProps) => {
  return (
    <Wrapper {...props}>
      <HeaderMain tabLogo={{ label: 'logo' }} tabs={[]} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > * {
    opacity: 0;
    pointer-events: none;
  }
`;
