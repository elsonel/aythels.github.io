import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { GreaterThan, LessThan } from '../../../utilities/styles/ResponsiveCSS';
import { useState } from 'react';
import { getElementAt } from '../../../utilities/scripts/Array';
import { ButtonModalClose } from '../../inputs/ButtonModalClose';
import { ButtonModalNext } from '../../inputs/ButtonModalNext';
import { Modal, ModalProps } from '../../layout/Modal';
import { Counter } from '../../atoms/Counter/Counter';

const createPane = (srcList: ImageProps[], index: number) => {
  const left: ImageProps = getElementAt(srcList, index - 1);
  const middle: ImageProps = getElementAt(srcList, index);
  const right: ImageProps = getElementAt(srcList, index + 1);
  return [
    <PositionedImage key={left.src} $index={index - 1} {...left} />,
    <PositionedImage key={middle.src} $index={index} {...middle} />,
    <PositionedImage key={right.src} $index={index + 1} {...right} />,
  ];
};

export interface GalleryModalProps extends ModalProps {
  srcList: ImageProps[];
  initialIndex?: number;
  onCloseClick?: () => void;
}

export const GalleryModal = ({
  srcList,
  initialIndex = 0,
  onCloseClick,
  ...props
}: GalleryModalProps) => {
  if (srcList.length === 0) throw new Error('Need at least one image!');

  const [index, setIndex] = useState(initialIndex);
  const [currentPane, setCurrentPane] = useState(createPane(srcList, index));
  const [isAnimated, setIsAnimated] = useState(false);

  const changeImage = useCallback(
    (newIndex: number) => {
      setIsAnimated(true);
      setCurrentPane(createPane(srcList, newIndex));
      setIndex(newIndex);
    },
    [srcList]
  );

  useEffect(() => {
    changeImage(initialIndex);
    setIsAnimated(false);
  }, [changeImage, initialIndex]);

  const centerImage = useMemo(
    () => getElementAt(srcList, index),
    [index, srcList]
  );

  return (
    <Modal {...props}>
      <Content>
        <RowTop>
          <ButtonClosePlaceholder />
          <Title isWrapped={false}>{centerImage.alt}</Title>
          <ButtonModalClose onClick={onCloseClick} />
        </RowTop>
        <WrapperMiddle>
          <ImageContainer
            // Disable animation after image settles to prevent resizing transitions
            onTransitionEnd={() => setIsAnimated(false)}
            $isAnimated={isAnimated}
            $index={index}
          >
            {currentPane}
          </ImageContainer>
        </WrapperMiddle>
        <RowBottom>
          <CounterPlaceholder />
          <ButtonWrapper>
            <ButtonModalNext
              direction={'LEFT'}
              onClick={() => changeImage(index - 1)}
            />
            <ButtonModalNext
              direction={'RIGHT'}
              onClick={() => changeImage(index + 1)}
            />
          </ButtonWrapper>
          <StyledCounter
            numerator={srcList.indexOf(centerImage) + 1}
            denominator={srcList.length}
          />
        </RowBottom>
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;

const Row = styled.div`
  box-sizing: border-box;
  height: 52px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  padding: 0px 10px;
`;

const RowTop = styled(Row)`
  box-shadow: 0 -1px 0 0 ${({ theme }) =>
      `${theme.color.backgroundOppositeHighlight}`} inset;
`;

const RowBottom = styled(Row)`
  box-shadow: 0 1px 0 0
    ${({ theme }) => `${theme.color.backgroundOppositeHighlight}`} inset;
`;

const Title = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  flex-grow: 1;

  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.font.title.family};
  text-align: center;

  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.h6};`)}
`;

const ButtonClosePlaceholder = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const StyledCounter = styled(Counter)`
  width: 0px;
  flex-grow: 1;
  justify-content: flex-end;
`;

const CounterPlaceholder = styled(StyledCounter)`
  opacity: 0;
  pointer-events: none;
`;

const WrapperMiddle = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const ImageContainer = styled.div<{ $index: number; $isAnimated: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ $index }) =>
    `transform: translateX(calc(${-$index} * max(100vw, 100vh)));`}

  transition: ${({ theme, $isAnimated }) =>
    $isAnimated ? `${theme.speed.normal}ms ease` : 'none'};
`;

const PositionedImage = styled(Image)<{ $index: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  ${({ $index }) =>
    `transform: translateX(calc(${$index} * max(100vw, 100vh)));`}
  object-fit: contain;
`;
