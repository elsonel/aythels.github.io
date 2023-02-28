import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { GreaterThan, LessThan } from '../../../utility/styles/ResponsiveCSS';
import { useState } from 'react';
import { getElementAt } from '../../../utility/scripts/Array';
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
  caption?: string;
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

  const displayNextButtons = srcArray.length <= 1 ? false : true;
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
          <ButtonNext
            direction={'LEFT'}
            onClick={() => changeImage(index - 1)}
          />
          <ButtonNext
            direction={'RIGHT'}
            onClick={() => changeImage(index + 1)}
          />
        </RowBottom>
        {/*<RowBottom>
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
          </RowBottom>*/}
      </Content>
    </Modal>
  );
};

/*
          <Counter
            numerator={(index % srcArray.length) + 1}
            denominator={srcArray.length}
          />

*/

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;

const Row = styled.div`
  box-sizing: border-box;
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 0 1px
    ${({ theme }) => `${theme.color.backgroundOppositeHighlight}`} inset;
`;

const RowTop = styled(Row)`
  gap: 20px;

  padding: 14px;
  //border-bottom: 1px solid
  ${({ theme }) => theme.color.backgroundOppositeHighlight};
`;

const Title = styled(Paragraph)`
  flex-grow: 1;

  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.font.title.family};
  text-align: center;

  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.h6};`)}
`;

const ButtonClosePlaceholder = styled.div`
  width: 32px;
  height: 32px;
`;

const RowBottom = styled(Row)`
  display: flex;
  justify-content: center;

  //border-top: 1px solid
  ${({ theme }) => theme.color.backgroundOppositeHighlight};
`;

const ButtonNext = styled(ButtonModalNext)`
  height: 100%;

  ${LessThan(500, `width: 50%;`)}
`;

const Fraction = styled.div`
  display: flex;
  align-items: center;
`;

const Numerator = styled(Paragraph)`
  position: relative;
  left: -2px;
  font-family: ${({ theme }) => theme.font.title.family};
  color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.font.default.size.h5};
`;

const Denominator = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.title.family};
  color: ${({ theme }) => theme.color.textNeutral};
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

  ${LessThan(500, `display: none;`)}
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
    $isAnimated ? `${theme.speed.normal}ms ease` : 'none'};
`;

const ImageStyled = styled(Image)<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;

  left: ${({ $index }) => `${$index * IMAGE_DISTANCE}vw`};

  object-fit: contain;
`;
