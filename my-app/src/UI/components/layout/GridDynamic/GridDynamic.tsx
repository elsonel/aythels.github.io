import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { LessThanHook } from '../../../utility/ResponsiveProps';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';

function sliceIntoChunks(array: any[], parts: number) {
  array = [...array];
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

export interface GridDynamicProps extends React.HTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactElement<ImageThumbnailProps>[]
    | React.ReactElement<ImageThumbnailProps>;
}

export const GridDynamic: React.FC<GridDynamicProps> = ({
  children = [],
  ...props
}): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  let COLUMN_COUNT = 3;
  if (LessThanHook(800)) COLUMN_COUNT = 2;
  if (LessThanHook(600)) COLUMN_COUNT = 1;

  const createColumns = () => {
    !Array.isArray(children) && (children = [children]);
    const childPartitions = sliceIntoChunks(children, COLUMN_COUNT);
    let imageIndex = 0;
    const elements: any[] = [];

    for (let i = 0; i < COLUMN_COUNT; i++) {
      const imageElements: React.ReactElement<{ $COLUMN_COUNT: number }>[] = [];

      // eslint-disable-next-line no-loop-func
      childPartitions[i].forEach((e, j) => {
        imageElements.push(
          <ItemWrapper $visible={visible} $index={imageIndex}>
            {e}
          </ItemWrapper>
        );

        imageIndex += 1;
      });

      elements.push(
        <ColumnWrapper key={i} $COLUMN_COUNT={COLUMN_COUNT}>
          {imageElements}
        </ColumnWrapper>
      );
    }

    return elements;
  };

  return <Wrapper {...props}>{createColumns()}</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;

  display: flex;
  gap: 20px;
`;

const ColumnWrapper = styled.div<{ $COLUMN_COUNT: number }>`
  width: ${({ $COLUMN_COUNT }) => 100 / $COLUMN_COUNT}%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div<{ $visible: boolean; $index: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.speed.slow} ease-out
    ${({ $index }) => $index * 60}ms;

  width: 100%;

  > * {
    width: 100% !important;
    height: 100% !important;
  }
`;
