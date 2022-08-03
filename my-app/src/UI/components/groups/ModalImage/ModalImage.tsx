import React from 'react';
import styled from 'styled-components';
import { Image } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { Theme } from '../../../utility/Theme';
import { LessThan } from '../../../utility/ResponsiveCSS';
import { RowCenter } from '../../layout/RowCenter/RowCenter';
import { useState } from 'react';
import { ButtonReverse } from '../../inputs/ButtonReverse';
import { Close } from '@styled-icons/zondicons/Close';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { ArrowLeft } from '@styled-icons/zondicons/ArrowLeft';
import { TextCaption } from '../../text/TextCaption';

export interface ImageProps {
  src: string;
  title?: string;
  caption?: string;
}

export interface ModalImageProps {
  srcArray: Array<ImageProps>;
  visible: boolean;
  onClick?: () => void;
}

export const ModalImage = ({
  srcArray,
  visible = false,
  onClick,
  ...props
}: ModalImageProps) => {
  let displayNextButtons = true;

  // Must have at least three elements in props array for slider to work properly
  if (srcArray.length === 1) {
    displayNextButtons = false;
    srcArray = [...srcArray, ...srcArray, ...srcArray];
  } else if (srcArray.length === 2) {
    srcArray = [...srcArray, ...srcArray];
  }

  const [srcIndex, setSrcIndex] = useState(0);
  const [lastSrcIndex, setLastSrcIndex] = useState(0);

  const getIndex = (index: number) => {
    if (index > 0) return index % srcArray.length;
    else return (index + srcArray.length) % srcArray.length;
  };

  return (
    <Wrapper $visible={visible} {...props}>
      <Row
        justify="right"
        center={
          srcArray[srcIndex].title && (
            <Title size="h6" weight="bold2">
              {srcArray[srcIndex].title!}
            </Title>
          )
        }
      >
        <ButtonClose
          onClick={onClick}
          size="small"
          border={Theme.colors.textPassive3}
          borderReversed={Theme.colors.text}
          primary={'transparent'}
          secondary={Theme.colors.textPassive3}
          primaryReversed={Theme.colors.background}
          secondaryReversed={Theme.colors.text}
          icon={<Close />}
        />
      </Row>
      <ImageContainer>
        {srcArray.map((element, index) => {
          if (index === getIndex(srcIndex - 1))
            return (
              <ImageExtended
                key={index}
                $side={-1}
                $prevImage={lastSrcIndex === index}
                src={element.src}
              />
            );
          else if (index === getIndex(srcIndex + 1))
            return (
              <ImageExtended
                key={index}
                $side={1}
                $prevImage={lastSrcIndex === index}
                src={element.src}
              />
            );
          else if (index === srcIndex)
            return (
              <ImageExtended
                key={index}
                $side={0}
                $prevImage={true}
                src={element.src}
              />
            );
          return null;
        })}
      </ImageContainer>
      <Row
        center={
          srcArray[srcIndex].caption && (
            <Caption>{srcArray[srcIndex].caption!}</Caption>
          )
        }
      >
        {displayNextButtons && (
          <ButtonNext
            size="small"
            border={Theme.colors.textPassive3}
            borderReversed={Theme.colors.text}
            primary={'transparent'}
            secondary={Theme.colors.textPassive3}
            primaryReversed={Theme.colors.background}
            secondaryReversed={Theme.colors.text}
            icon={<ArrowLeft />}
            onClick={() => {
              setLastSrcIndex(srcIndex);
              setSrcIndex(getIndex(srcIndex - 1));
            }}
          />
        )}
        {displayNextButtons && (
          <ButtonNext
            size="small"
            border={Theme.colors.textPassive3}
            borderReversed={Theme.colors.text}
            primary={'transparent'}
            secondary={Theme.colors.textPassive3}
            primaryReversed={Theme.colors.background}
            secondaryReversed={Theme.colors.text}
            icon={<ArrowRight />}
            onClick={() => {
              setLastSrcIndex(srcIndex);
              setSrcIndex(getIndex(srcIndex + 1));
            }}
          />
        )}
      </Row>
    </Wrapper>
  );
};

const ButtonClose = styled(ButtonReverse)`
  width: 32px;
  height: 32px;
  padding: 0px;
  margin: 0 10px;
`;

const ButtonNext = styled(ButtonReverse)`
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
`;

const Wrapper = styled.div<{ $visible: boolean }>`
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  transition: ${({ theme }) => `${theme.speed.slow}`};
  transition-property: opacity;
  background: ${({ theme }) => theme.colors.background};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;

  box-sizing: border-box;
  position: relative;
  margin: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
`;

const ImageExtended = styled(Image)<{ $side: -1 | 0 | 1; $prevImage: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: contain;

  position: absolute;

  transition: ${({ theme }) => `${theme.speed.normal} ease-in`};

  ${({ theme, $side, $prevImage }) => {
    let position;
    if ($side === -1) position = '-250vw';
    else if ($side === 0) position = '0';
    else if ($side === 1) position = '250vw';

    let transition;
    if ($side === -1) transition = $prevImage ? theme.speed.slow : 'none';
    else if ($side === 0) transition = theme.speed.slow;
    else if ($side === 1) transition = $prevImage ? theme.speed.slow : 'none';

    return `
      transition: ${transition} ease;
      transform: translate(${position});
    `;
  }}
`;

const Row = styled(RowCenter)`
  box-sizing: border-box;
  height: 50px;

  box-shadow: 0 0 0 1px ${({ theme }) => `${theme.colors.textPassive3}`} inset;
`;
