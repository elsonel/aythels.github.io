import React from 'react';
import styled from "styled-components";
import { Image } from '../Image/Image';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Theme } from '../../../utility/Theme';

export interface PostProps {
  src: string;
  caption?: string;
  onClick?: () => void;
}

export const Post = ({
    src,
    caption,
    onClick,
    ...props
  }: PostProps) => {
    return (
      <div {...props}>
        <ImageExtended onClick={onClick} src={src}/>
        { caption && 
          <TextContainer 
            size="small" 
            textAlign="center" 
            color={Theme.colors.textPassive1}>
              {caption}
          </TextContainer>
        }
      </div>
    );
  };

  const ImageExtended = styled(Image)`

    width: 100%;
    cursor: pointer;
  `;

  const TextContainer = styled(Paragraph)`
    width: 100%;
    padding: 2px 0;
  `;