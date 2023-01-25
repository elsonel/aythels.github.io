import React from 'react';
import styled, { css } from 'styled-components';
import { TextButton } from '../../text/TextButton';
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
        <DividerLeft />
        <TextButton
          isWrapped={false}
          size="h5"
          weight="semiBold"
          children={children}
        />
        <DividerRight />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;

  width: 100%;
  height: 64px;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Divider = css`
  flex-grow 1;
  width: 0px;
  height: 0.8px;
  background: ${({ theme }) => theme.color.textNeutral};

`;

const DividerRight = styled.div`
  ${Divider}
  background: ${({ theme }) => theme.color.greyBackdropRight};
`;

const DividerLeft = styled.div`
  ${Divider}
  background: ${({ theme }) => theme.color.greyBackdropLeft};
`;
