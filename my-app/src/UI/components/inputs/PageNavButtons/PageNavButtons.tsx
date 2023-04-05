import React from 'react';
import { PageNavButton } from './Button/PageNavButton';
import styled from 'styled-components';
import { FrameLayoutSticky } from '../../layout/FrameLayoutSticky';
import { GreaterThan, LessThan } from '../../../utility/styles/ResponsiveCSS';
import { LinkFake } from '../LinkFake/LinkFake';

export interface PageNavButtonsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backHref?: string;
  forwardHref?: string;
  onBackClick?: () => void;
  onForwardClick?: () => void;
}

export const PageNavButtons: React.FC<PageNavButtonsProps> = ({
  backHref,
  forwardHref,
  onBackClick,
  onForwardClick,
  ...props
}): React.ReactElement => {
  return (
    <FrameLayoutSticky {...props}>
      <Wrapper>
        <LeftLink href={backHref} onClick={onBackClick} $isVisible={!!backHref}>
          <Button direction="LEFT" />
        </LeftLink>
        {forwardHref && (
          <RightLink href={forwardHref} onClick={onForwardClick}>
            <Button direction="RIGHT">NEXT PROJECT</Button>
          </RightLink>
        )}
      </Wrapper>
    </FrameLayoutSticky>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;

  ${GreaterThan(0, `left: 0px; width: calc(100% + 1px);`)}
  ${GreaterThan(500, `left: 0px; width: auto;`)}
  ${GreaterThan(800, `left: -52px; width: auto;`)}
`;

const LeftLink = styled(LinkFake)<{ $isVisible: boolean }>`
  ${({ $isVisible }) =>
    !$isVisible &&
    `
      opacity: 0;
      pointer-events: none;
  
      ${LessThan(800, `display: none;`)}
  `};
`;

const RightLink = styled(LinkFake)`
  position: relative;
  left: -1px;
  flex-grow: 1;
`;

const Button = styled(PageNavButton)`
  width: 100%;
  &:hover {
    z-index: 1;
  }
`;
