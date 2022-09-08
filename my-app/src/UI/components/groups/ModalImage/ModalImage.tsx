import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Image } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { LessThan } from '../../../utility/styles/ResponsiveCSS';
import { useState } from 'react';
import { TextCaption } from '../../text/TextCaption';
import { getElementAt } from '../../../utility/scripts/Array';
import { ButtonModalClose } from '../../inputs/ButtonModalClose';
import { ButtonModalNext } from '../../inputs/ButtonModalNext';
import { Modal, ModalProps } from '../../layout/Modal';

const createPane = (srcArray: any[], index: number) => {
  return [
    <ImageStyled
      key={getElementAt(srcArray, index - 1).src}
      $index={index - 1}
      src={getElementAt(srcArray, index - 1).src}
    />,
    <ImageStyled
      key={getElementAt(srcArray, index).src}
      $index={index}
      src={getElementAt(srcArray, index).src}
    />,
    <ImageStyled
      key={getElementAt(srcArray, index + 1).src}
      $index={index + 1}
      src={getElementAt(srcArray, index + 1).src}
    />,
  ];
};

export interface ImageProps {
  src: string;
  title?: string;
  caption?: string;
}

export interface ModalImageProps extends ModalProps {
  srcArray: ImageProps[];
  indexOffset?: number;
  onClick?: () => void;
}

export const ModalImage = ({
  srcArray,
  indexOffset = 0,
  onClick,
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
    <Wrapper {...props}>
      <RowTop>
        <ButtonClosePlaceholder onClick={onClick} />
        <Title isWrapped={false}>{getElementAt(srcArray, index).title}</Title>
        <ButtonModalClose onClick={onClick} />
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
        <Caption isWrapped={false}>
          {getElementAt(srcArray, index).caption}
        </Caption>
        {displayNextButtons && (
          <ButtonNext
            direction={'RIGHT'}
            onClick={() => changeImage(index + 1)}
          />
        )}
      </RowBottom>
    </Wrapper>
  );
};

const Wrapper = styled(Modal)`
  background-color: ${({ theme }) => theme.color.background};

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  box-sizing: border-box;

  height: 48px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 0 1px ${({ theme }) => `${theme.color.outline}`} inset;
`;

const RowTop = styled(Row)`
  padding: 0px 8px;
  gap: 20px;
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
  gap: 20px;

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

const Caption = styled(TextCaption)`
  flex-grow: 1;

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
  padding: 10px;
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
