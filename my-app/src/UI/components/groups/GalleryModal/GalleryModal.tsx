import { useEffect, useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { Image as ImageComponent, ImageProps } from '../../atoms/Image';
import { Paragraph } from '../../text/Paragraph';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import { useState } from 'react';
import { getElementAt } from '../../../utilities/scripts/Array';
import { ButtonModalClose } from '../../inputs/ButtonModalClose';
import { ButtonModalNext } from '../../inputs/ButtonModalNext';
import { Modal, ModalProps } from '../../layout/Modal';
import { Counter } from '../../atoms/Counter/Counter';
import useOnWindowResize from '../../../utilities/hooks/useOnWindowResize';
import { useMetaBackground } from '../../../utilities/hooks/useMetaBackground';

const createPane = (images: ImageProps[], index: number) => {
  const left: ImageProps = getElementAt(images, index - 1);
  const middle: ImageProps = getElementAt(images, index);
  const right: ImageProps = getElementAt(images, index + 1);
  return [
    <PositionedImage
      key={left.src}
      $index={index - 1}
      {...left}
      sizes="100vw"
    />,
    <PositionedImage
      key={middle.src}
      $index={index}
      {...middle}
      sizes="100vw"
    />,
    <PositionedImage
      key={right.src}
      $index={index + 1}
      {...right}
      sizes="100vw"
    />,
  ];
};

export interface GalleryModalProps extends ModalProps {
  images: ImageProps[];
  initialIndex?: number;
  isVisible?: boolean;
  onCloseClick?: () => void;
}

export const GalleryModal = ({
  images,
  initialIndex = 0,
  isVisible = true,
  onCloseClick,
  ...props
}: GalleryModalProps) => {
  const { color } = useTheme();
  const setMetaBackgroundColor = useMetaBackground();
  const [index, setIndex] = useState(initialIndex);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    setMetaBackgroundColor(
      isVisible ? color.backgroundOpposite : color.background
    );
  }, [color, isVisible, setMetaBackgroundColor]);

  useOnWindowResize(() => setIsAnimated(false));

  useEffect(() => {
    if (images.length === 0) throw new Error('Need at least one image!');
  }, [images]);

  // This is here to prevent a "flash" result from the previous image when the modal is reopened.
  useEffect(() => {
    if (!isVisible) return;
    isVisible && setIsImageVisible(true);
  }, [isVisible]);

  // Change the image offset when initialIndex changes
  useEffect(() => {
    if (!isVisible) return;
    setIsAnimated(false);
    setIndex(initialIndex);
  }, [isVisible, initialIndex]);

  // The current centered image
  const centerImage = useMemo(
    () => getElementAt(images, index),
    [index, images]
  );

  return (
    <Modal {...props} isVisible={isVisible}>
      <Content>
        <RowTop>
          <ButtonClosePlaceholder />
          <Title isWrapped={false}>{centerImage.alt}</Title>
          <ButtonModalClose
            onClick={() => {
              onCloseClick && onCloseClick();
              setIsImageVisible(false);
            }}
          />
        </RowTop>
        <WrapperMiddle $isVisible={isImageVisible}>
          <ImageContainer
            // Disable animation after image settles to prevent resizing transitions
            $isAnimated={isAnimated}
            $index={index}
          >
            {createPane(images, index)}
          </ImageContainer>
        </WrapperMiddle>
        <RowBottom>
          <CounterPlaceholder />
          <ButtonWrapper>
            <ButtonModalNext
              direction={'LEFT'}
              onClick={() => {
                setIsAnimated(true);
                setIndex(index - 1);
              }}
            />
            <ButtonModalNext
              direction={'RIGHT'}
              onClick={() => {
                setIsAnimated(true);
                setIndex(index + 1);
              }}
            />
          </ButtonWrapper>
          <StyledCounter
            numerator={images.indexOf(centerImage) + 1}
            denominator={images.length}
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

const Title = styled(Paragraph).attrs(({ theme }) => ({
  isWrapped: false,
}))`
  flex-grow: 1;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.background};

  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.title.size.default};`) +
    GreaterThan(500, `font-size: ${theme.font.title.size.large};`)}
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

const WrapperMiddle = styled.div<{ $isVisible: boolean }>`
  flex-grow: 1;
  width: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const ImageContainer = styled.div<{
  $index: number;
  $isAnimated: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ $index }) =>
    `transform: translateX(calc(${-$index} * max(100vw, 100vh)));`}
  transition: ${({ theme, $isAnimated }) =>
    $isAnimated ? `${theme.speed.normal}ms ease` : 'none'};
`;

const PositionedImage = styled(ImageComponent)<{ $index: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  ${({ $index }) =>
    `transform: translateX(calc(${$index} * max(100vw, 100vh)));`}
  object-fit: contain;
`;
