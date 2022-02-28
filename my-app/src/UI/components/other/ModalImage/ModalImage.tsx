import React from 'react';
import styled from "styled-components";
import { Image } from '../../images/Image/Image';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Theme } from '../../../utility/Theme';
import { ButtonModal } from '../../inputs/ButtonModal/ButtonModal';
import { ResponsiveLessThan } from '../../../utility/Responsive';
import { RowCenter } from '../../layout/RowCenter/RowCenter';
import { useState } from 'react';

export interface ImageProps {
  src: string;
  title: string;
  caption?: string;  
}

export interface ModalImageProps {
  srcArray: Array<ImageProps>;
  visible: boolean;
  visibleFooter: boolean;
  onClick?: () => void;
}

export const ModalImage = ({
    srcArray,
    visible=false,
    visibleFooter=true,
    onClick,
    ...props
  }: ModalImageProps) => {

    // Must have at least three elements in props array for slider to work properly
    if (srcArray.length === 1) srcArray = [...srcArray, ...srcArray, ...srcArray];
    else if (srcArray.length === 2) srcArray = [...srcArray, ...srcArray];

    const [srcIndex, setSrcIndex] = useState(0);
    const [lastSrcIndex, setLastSrcIndex] = useState(0);

    const getIndex = (index: number) => {
      if (index > 0) return index % srcArray.length;
      else return (index + srcArray.length) % srcArray.length;
    }

    return (
      <Wrapper $visible={visible}>
        <Row justify="right" center={<Paragraph size="h6" weight="bold2">{srcArray[srcIndex].title}</Paragraph>}>
          <CloseButton onClick={onClick}>✕</CloseButton>
        </Row>
        <ImageContainer>
            {srcArray.map((element, index) => {              
              if (index === getIndex(srcIndex - 1)) 
                return <ImageExtended key={index} $side={-1} $prevImage={lastSrcIndex === index} src={element.src}/>
              else if (index === getIndex(srcIndex + 1))
                return <ImageExtended key={index} $side={1} $prevImage={lastSrcIndex === index} src={element.src}/>
              else if (index === srcIndex) 
                return <ImageExtended key={index} $side={0} $prevImage={true} src={element.src}/>

              return null;
            })}
        </ImageContainer>
        <Row center={srcArray[srcIndex].caption && <Caption size="small" textAlign='center' color={Theme.colors.textPassive2}>{srcArray[srcIndex].caption!}</Caption>}>
          {visibleFooter && <NextButton onClick={() => {
            setLastSrcIndex(srcIndex);
            setSrcIndex(getIndex(srcIndex - 1));
          }}>⟵</NextButton>}
          {visibleFooter && <NextButton onClick={() => {
            setLastSrcIndex(srcIndex);
            setSrcIndex(getIndex(srcIndex + 1));
          }}>⟶</NextButton>}
        </Row>
      </Wrapper>
    );
  };

const NextButton = styled(ButtonModal)`
  width: 100px;
  height: 100%;

  border: solid 1px ${({theme}) => theme.colors.textPassive3};
  border-width: 0 1px;
  color: ${({theme}) => theme.colors.textPassive2};

  &:hover {
    width: 120px;
  }

  ${ResponsiveLessThan('mobileLarge', `
    width: 50%;

    &:hover {
      width: calc(50% + 20px);
    }
  `)}
`;

const CloseButton = styled(ButtonModal)`
    height: 30px;
    width: 30px;
    margin: 0 10px;
    font-size: ${Theme.font.size.default};
    color: ${({theme}) => theme.colors.textPassive2};

    border: solid 1px ${({theme}) => theme.colors.textPassive3};

    &:hover {
      transform: scale(1.25);
    }
`;

const Caption = styled(Paragraph)`
    white-space: nowrap;
    flex: 1;
    padding: 0 40px;
    overflow: hidden;

    ${ResponsiveLessThan('mobileLarge', `
      display: none;
  `)}
`;

const Wrapper = styled.div<{$visible: boolean}>`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  
  transition: ${({theme}) => `${theme.speed.slow}`};
  background: ${({theme}) => theme.colors.background};
  opacity: ${({$visible}) => $visible ? 1 : 0};

  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;
  margin: 8px 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

`;

const ImageExtended = styled(Image)<{$side: -1 | 0 | 1, $prevImage: boolean}>`
  max-height: 100%;
  max-width: 100%;
  position: absolute;

  transition: ${({theme}) => `${theme.speed.normal} ease-in`};


  ${({theme, $side, $prevImage}) => {

    let position;
    if ($side === -1) position = `-200vw`;  
    else if ($side === 0) position = `0`;
    else if ($side === 1) position = `200vw`;

    let transition;
    if ($side === -1) transition = $prevImage ? theme.speed.slow : `none`;  
    else if ($side === 0) transition = theme.speed.slow;
    else if ($side === 1) transition = $prevImage ? theme.speed.slow : `none`;  

    return `
      transition: ${transition} ease;
      transform: translate(${position});
    `;
  }}
`;

const Row = styled(RowCenter)`
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.colors.textPassive3};
  border-width: 1px 0;
`;