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
      {children && <Text size="small">{children}</Text>}
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;

  user-select: none;
`;

const DividerWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: right;
`;

const Divider = styled.div`
  height: 1px;
  width: calc(100% - 20px);

  background: ${({ theme }) => theme.colors.text};
`;

const Text = styled(TextTitle)`
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
