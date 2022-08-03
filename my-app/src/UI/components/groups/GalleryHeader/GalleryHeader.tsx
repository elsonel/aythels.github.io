import React from 'react';
import styled from 'styled-components';
import { HiddenTouchScrollX } from '../../../utility/ScrollStyle';
import { ButtonReverse } from '../../inputs/ButtonReverse';
import { Theme } from '../../../utility/Theme';

export interface GalleryHeaderTab {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
}

export interface GalleryHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: GalleryHeaderTab[];
}

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({
  tabs,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Row>
        <Expander />
        {tabs.map((e, i) => (
          <ButtonReverse
            key={i}
            onClick={e.onClick}
            size={'small'}
            primary={Theme.colors.text}
            primaryReversed={Theme.colors.textPassive1}
            isActive={e.isSelected}
          >
            {e.label}
          </ButtonReverse>
        ))}
        <Expander />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 6px;
`;

const Row = styled.div`
  display: flex;
  column-gap: 12px;

  background: ${({ theme }) => theme.colors.background};

  ${HiddenTouchScrollX}
`;

const Expander = styled.div`
  flex-grow: 1;
`;
