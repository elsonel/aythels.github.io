import React from 'react';
import styled from 'styled-components';
import { TextTitle } from '../../text/TextTitle';

export interface ProjectSectionTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
}

export const ProjectSectionTitle: React.FC<ProjectSectionTitleProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Row>
        {children && (
          <TextTitle isWrapped={false} size="small" children={children} />
        )}
        <Divider />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  overflow: hidden;
`;

const Row = styled.div`
  width: calc(100% + 20px);
  height: 100%;

  display: flex;
  align-items: center;
  gap: 20px;
`;

const Divider = styled.div`
  flex-grow 1;
  height: 0.8px;
  background: ${({ theme }) => theme.colors.text};
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`;
