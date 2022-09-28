import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { LessThan } from '../../../utility/styles/ResponsiveCSS';
import { useState } from 'react';
import { TextCaption } from '../../text/TextCaption';
import { getElementAt } from '../../../utility/scripts/Array';
import { ButtonModalClose } from '../../inputs/ButtonModalClose';
import { ButtonModalNext } from '../../inputs/ButtonModalNext';
import { Modal, ModalProps } from '../../layout/Modal';

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

export interface ModalImageEntry extends ImageProps {
  title?: string;
  caption?: string;
}

export interface ModalImageProps extends ModalProps {
  srcArray: ModalImageEntry[];
  indexOffset?: number;
  onCloseClick?: () => void;
}

export const ModalImage = ({
  srcArray,
  indexOffset = 0,
  onCloseClick,
  ...props
}: ModalImageProps) => {
  if (srcArray.length === 0) throw new Error('Need at least one image!');

  const displayNextButtons = srcArray.length <= 1 ? false : true;
  const [index, setIndex] = useState(indexOffset);
  const [currentPane, setCurrentPane] = useState(createPane(srcArray, index));
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    changeImage(indexOffset);
    setIsAnimated(false);
  }, [indexOffset]);

  const changeImage = (newIndex: number) => {
    setIsAnimated(true);
    setCurrentPane(createPane(srcArray, newIndex));
    setIndex(newIndex);
  };

  return (
    <Modal {...props}>
      <Content>
        <RowTop>
          <ButtonClosePlaceholder />
          <Title isWrapped={false}>{getElementAt(srcArray, index).title}</Title>
          <ButtonModalClose onClick={onCloseClick} />
        </RowTop>
        <WrapperMiddle>
          <ImageContainer
            onTransitionEnd={() => setIsAnimated(false)} // Stop transitions after image has settled to prevent resizing transitions
            $isAnimated={isAnimated}
            $offset={index}
          >
            {currentPane}
          </ImageContainer>
        </WrapperMiddle>
        <RowBottom>
          {displayNextButtons && (
            <ButtonNext
              direction={'LEFT'}
              onClick={() => changeImage(index - 1)}
            />
          )}
          <WrapperCaption>
            <TextCaption isWrapped={false}>
              {getElementAt(srcArray, index).caption}
            </TextCaption>
          </WrapperCaption>
          {displayNextButtons && (
            <ButtonNext
              direction={'RIGHT'}
              onClick={() => changeImage(index + 1)}
            />
          )}
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
  background-color: ${({ theme }) => theme.color.background};
`;

const Row = styled.div`
  box-sizing: border-box;

  height: 52px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  //box-shadow: 0 0 0 1px ${({ theme }) => `${theme.color.outline}`} inset;
`;

const RowTop = styled(Row)`
  gap: 20px;

  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
`;

const Title = styled(Paragraph)`
  flex-grow: 1;

  font-size: ${({ theme }) => theme.font.size.h6};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  text-align: center;
`;

const ButtonClosePlaceholder = styled(ButtonModalClose)`
  opacity: 0;
  pointer-events: none;
`;

const RowBottom = styled(Row)`
  ${LessThan(
    'mobileLarge',
    `
    gap: 0px;

    > * {
      &:first-child {
        border-right: 0px;
      }
    }
  `
  )}
`;

const ButtonNext = styled(ButtonModalNext)`
  height: 100%;

  ${LessThan(
    'mobileLarge',
    `
    width: 50%;
  `
  )}
`;

const WrapperCaption = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  overflow: hidden;

  height: 100%;
  padding: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.color.outline};

  ${LessThan(
    'mobileLarge',
    `
      display: none;
  `
  )}
`;

const IMAGE_DISTANCE = 200;

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
    $isAnimated ? `${theme.speed.normal} ease` : 'none'};
`;

const ImageStyled = styled(Image)<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;

  left: ${({ $index }) => `${$index * IMAGE_DISTANCE}vw`};

  object-fit: contain;
`;
