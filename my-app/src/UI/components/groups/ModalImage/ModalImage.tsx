import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Image } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { LessThan } from '../../../utility/ResponsiveCSS';
import { RowCenter } from '../../layout/RowCenter/RowCenter';
import { useState } from 'react';
import { Close } from '@styled-icons/zondicons/Close';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { ArrowLeft } from '@styled-icons/zondicons/ArrowLeft';
import { TextCaption } from '../../text/TextCaption';
import { GlobalScrollHidden } from '../../../utility/Styles';
import { ButtonModal } from '../../inputs/ButtonModal';
import { getElementAt } from '../../../utility/Array';

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

export interface ModalImageProps {
  srcArray: ImageProps[];
  indexOffset?: number;
  isVisible?: boolean;
  onClick?: () => void;
}

export const ModalImage = ({
  srcArray,
  indexOffset = 0,
  isVisible = false,
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
    <Wrapper $isVisible={isVisible} {...props}>
      {isVisible && <GlobalScrollHidden />}
      <Row
        justify="right"
        center={<Title>{getElementAt(srcArray, index).title}</Title>}
      >
        <ButtonClose onClick={onClick} icon={<Close />} />
      </Row>
      <WrapperMiddle>
        <ImageContainer $isAnimated={isAnimated} $offset={index}>
          {currentPane}
        </ImageContainer>
      </WrapperMiddle>
      <Row center={<Caption>{getElementAt(srcArray, index).caption}</Caption>}>
        {displayNextButtons && [
          <ButtonNext
            key={'left'}
            icon={<ArrowLeft />}
            onClick={() => changeImage(index - 1)}
          />,
          <ButtonNext
            key={'right'}
            icon={<ArrowRight />}
            onClick={() => changeImage(index + 1)}
          />,
        ]}
      </Row>
    </Wrapper>
  );
};

const IMAGE_DISTANCE = 200;

const ButtonClose = styled(ButtonModal)`
  width: 32px;
  height: 32px;
  padding: 0px;
  margin: 0 10px;
`;

const ButtonNext = styled(ButtonModal)`
  width: 100px;
  height: 100%;

  ${LessThan(
    'mobileLarge',
    `
    width: 50%;
    border-width: 0.5px;
  `
  )}
`;

const Caption = styled(TextCaption)`
  max-width: calc(100% - 240px);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${LessThan(
    'mobileLarge',
    `
      display: none;
  `
  )}
`;

const Title = styled(Paragraph)`
  max-width: calc(100% - 100px);

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: ${({ theme }) => theme.font.weight.bold2};
  font-size: ${({ theme }) => theme.font.size.h6};
`;

const Wrapper = styled.div<{ $isVisible: boolean }>`
  z-index: ${({ theme }) => theme.layer.modal};
  position: fixed;

  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  transition: ${({ theme }) => `${theme.speed.slow}`};
  transition-property: opacity;
  background: ${({ theme }) => theme.colors.background};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  overflow: hidden;
`;

const WrapperMiddle = styled.div`
  flex-grow: 1;
  width: 100%;

  box-sizing: border-box;
  padding: 10px;
`;

const ImageContainer = styled.div<{ $offset: number; $isAnimated: boolean }>`
  width: 100%;
  height: 100%;

  left: ${({ $offset }) => `${-$offset * IMAGE_DISTANCE}vw`};
  transition: ${({ theme, $isAnimated }) =>
    $isAnimated ? `${theme.speed.normal} ease` : 'none'};

  position: relative;
`;

const ImageStyled = styled(Image)<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;

  object-fit: contain;
  left: ${({ $index }) => `${$index * IMAGE_DISTANCE}vw`};
`;

const Row = styled(RowCenter)`
  box-sizing: border-box;
  height: 50px;

  box-shadow: 0 0 0 1px ${({ theme }) => `${theme.colors.textPassive3}`} inset;
`;
