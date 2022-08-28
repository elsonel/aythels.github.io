import React from 'react';
import styled from 'styled-components';
import { ButtonReverse } from '../../inputs/ButtonReverse';
import { Theme } from '../../../utility/Theme';
import { Dropdown } from '../../inputs/Dropdown';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { DropdownHeader } from '../../atoms/DropdownHeader';
import { LessThanHook } from '../../../utility/ResponsiveProps';

export interface GalleryHeaderTab {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
}

export interface GalleryHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  pageTabs?: GalleryHeaderTab[];
  sortTabs?: GalleryHeaderTab[];
}

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({
  pageTabs = [],
  sortTabs = [],
  ...props
}): React.ReactElement => {
  const isMobile = LessThanHook(700);

  return (
    <Wrapper {...props}>
      <Row>
        {isMobile ? (
          <PageSelector
            header={
              <DropdownHeader
                size="small"
                icon={<ChevronUpDown />}
                title={pageTabs.find((e) => e.isSelected)!.label}
              />
            }
            tabs={pageTabs}
          />
        ) : (
          <TabWrapper>
            {pageTabs.map((e, i) => (
              <Button
                key={i}
                onClick={e.onClick}
                primary={Theme.colors.text}
                primaryReversed={Theme.colors.text}
                isActive={e.isSelected}
              >
                {e.label}
              </Button>
            ))}
          </TabWrapper>
        )}

        <SortSelector
          $isMobile={isMobile}
          header={
            <DropdownHeader
              size={isMobile ? 'small' : 'medium'}
              icon={<ChevronUpDown />}
              subtitle="SORT :&nbsp;"
              title={sortTabs.find((e) => e.isSelected)!.label}
            />
          }
          tabs={sortTabs}
        />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 20px;
`;

const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const TabWrapper = styled.div`
  align-self: stretch;

  display: flex;
  align-items: stretch;

  > * {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }
`;

const Button = styled(ButtonReverse)`
  height: auto;
  padding-left: 12px;
  padding-right: 12px;
`;

const PageSelector = styled(Dropdown)`
  flex-shrink: 0;
  width: 50%;
  max-width: 180px;
`;

const SortSelector = styled(Dropdown)<{ $isMobile: boolean }>`
  flex-shrink: 0;
  width: ${({ $isMobile }) => ($isMobile ? '50%' : '240px')};
  max-width: ${({ $isMobile }) => ($isMobile ? '180px' : 'none')};
`;
