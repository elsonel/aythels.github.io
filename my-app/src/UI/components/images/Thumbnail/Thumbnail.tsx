import React from 'react';
import styled from "styled-components";
import { Image } from '../Image/Image';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Theme } from '../../../utility/Theme';
import { useState } from 'react';

export interface ThumbnailProps {
  /**
   * The image source
   */
  src: string;
  /**
   * The image title
   */
  title?: string;
  /**
   * The image subtitle
   */
  subtitle?: string;
  /**
   * If the title is always visible or only visible on hover
   */
  titleVisible?: boolean;
  /**
   * Action onclick
   */
  onClick?: () => void;
}

export const Thumbnail = ({
    src,
    title,
    subtitle,
    titleVisible=false,
    onClick,
    ...props
  }: ThumbnailProps) => {
    const [hovered, setHovered] = useState(false);

    return (
      <WrapperPadding {...props}>
      <Wrapper onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <ImageExtended $hovered={hovered} src={src}/>
        <TextContainer $hovered={titleVisible ? true : hovered}>
          {subtitle && <Paragraph size="small" color={Theme.colors.background}>{subtitle}</Paragraph>}
          {title && <Paragraph size="large" weight="bold1" color={Theme.colors.background}>{title}</Paragraph>}
        </TextContainer>
      </Wrapper>
      </WrapperPadding>
    );
  };

const WrapperPadding = styled.div`
  width: 300px;
  padding: 10px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const ImageExtended = styled(Image)<{$hovered: boolean}>`
  width: 100%;
  display: flex;

  user-select: none;
  pointer-events: none;

  transition: ${({theme}) => `${theme.speed.slow}`};

  ${({$hovered}) => {
    if ($hovered) return `
      -webkit-filter: brightness(80%) contrast(125%) saturate(0%);
      -moz-filter: brightness(80%) contrast(125%) saturate(0%);
      filter: brightness(80%) contrast(125%) saturate(0%);
      transform: scale(1.02);
    `
  }};
`;

const TextContainer = styled.div<{$hovered: boolean}>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 14px;
  
  user-select: none;
  pointer-events: none;

  transition: ${({theme}) => `${theme.speed.normal}`};
  opacity: ${({$hovered}) => $hovered ? 1 : 0};
`;
