import React, { useCallback, useEffect } from 'react';
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

const createPane = (srcArray: ImageProps[], index: number) => {
  const left: ImageProps = getElementAt(srcArray, index - 1);
  const middle: ImageProps = getElementAt(srcArray, index);
  const right: ImageProps = getElementAt(srcArray, index + 1);
  return [
    <ImageStyled key={left.src} $index={index - 1} {...left} />,
    <ImageStyled key={middle.src} $index={index} {...middle} />,
    <ImageStyled key={right.src} $index={index + 1} {...right} />,
  ];
};

export interface GalleryImageModalEntry extends ImageProps {
  title?: string;
}

export interface GalleryImageModalProps extends ModalProps {
  srcArray: GalleryImageModalEntry[];
  indexOffset?: number;
  onCloseClick?: () => void;
}

export const GalleryImageModal = ({
  srcArray,
  indexOffset = 0,
  onCloseClick,
  ...props
}: GalleryImageModalProps) => {
  if (srcArray.length === 0) throw new Error('Need at least one image!');

  const [index, setIndex] = useState(indexOffset);
  const [currentPane, setCurrentPane] = useState(createPane(srcArray, index));
  const [isAnimated, setIsAnimated] = useState(false);

  const changeImage = useCallback(
    (newIndex: number) => {
      setIsAnimated(true);
      setCurrentPane(createPane(srcArray, newIndex));
      setIndex(newIndex);
    },
    [srcArray]
  );

  useEffect(() => {
    changeImage(indexOffset);
    setIsAnimated(false);
  }, [changeImage, indexOffset]);

  return (
    <Modal {...props}>
      <Content>
        <Row>
          <ButtonClosePlaceholder />
          <Title isWrapped={false}>{getElementAt(srcArray, index).title}</Title>
          <ButtonModalClose onClick={onCloseClick} />
        </Row>
        <WrapperMiddle>
          <ImageContainer
            onTransitionEnd={() => setIsAnimated(false)} // Stop transitions after image has settled to prevent resizing transitions
            $isAnimated={isAnimated}
            $offset={index}
          >
            {currentPane}
          </ImageContainer>
        </WrapperMiddle>
        <Row>
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
            numerator={srcArray.indexOf(getElementAt(srcArray, index)) + 1}
            denominator={srcArray.length}
          />
        </Row>
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

  box-shadow: 0 0 0 1px
    ${({ theme }) => `${theme.color.backgroundOppositeHighlight}`} inset;
  padding: 0px 10px;
`;

const Title = styled(Paragraph)`
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

const IMAGE_DISTANCE = 100;

const WrapperMiddle = styled.div`
  flex-grow: 1;
  //padding: 10px 0px;
`;

const ImageContainer = styled.div<{ $offset: number; $isAnimated: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  left: ${({ $offset }) => `${-$offset * IMAGE_DISTANCE}vw`};

  transition: ${({ theme, $isAnimated }) =>
    $isAnimated ? `${theme.speed.normal}ms ease` : 'none'};
`;

const ImageStyled = styled(Image)<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;

  left: ${({ $index }) => `${$index * IMAGE_DISTANCE}vw`};

  object-fit: contain;
`;
