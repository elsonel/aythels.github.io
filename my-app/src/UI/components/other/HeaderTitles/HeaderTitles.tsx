import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { RefObject } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import { Paragraph } from '../../text/Paragraph/Paragraph';

export interface HeaderTitlesProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current active title
   */
   activeTitle?: "projects" | "about";
}

export const HeaderTitles: React.FC<HeaderTitlesProps> = ({
  activeTitle,
  ...props
}): React.ReactElement => { 
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState(0);
  const [xPos, setXPos] = useState(0);

  const margin = 20;

  const setDimensions = (activeRef: RefObject<HTMLAnchorElement>) => {
    if (!activeRef.current || !projectsRef.current) return;

    const data = activeRef.current.getBoundingClientRect();
    const dataLeft = projectsRef.current.getBoundingClientRect();
    
    setWidth(data.right - data.left);
    setXPos(data.x - dataLeft.x + margin);
  }

  const onEnterTitle = useCallback((activeRef?: RefObject<HTMLAnchorElement>) => {
    if (activeRef)
      setDimensions(activeRef);
    else
      switch(activeTitle) {
        case 'projects':
          setDimensions(projectsRef);
          break;
        case 'about':
          setDimensions(aboutRef);
          break;
        default:
          setWidth(0);
          setXPos(20);
      }
  }, [activeTitle]);

  useEffect(() => {
    onEnterTitle();
  }, [onEnterTitle]);
  
  return (
    <Wrapper {...props}>
      <TitleLink
        $margin={margin}
        ref={projectsRef}
        onMouseEnter={() => onEnterTitle(projectsRef)} 
        onMouseLeave={() => onEnterTitle()} 
        href="https://www.w3schools.com">
          <Title weight="bold1">PROJECTS</Title>
      </TitleLink>
      <TitleLink
        $margin={margin}
        ref={aboutRef}
        onMouseEnter={() => onEnterTitle(aboutRef)} 
        onMouseLeave={() => onEnterTitle()} 
        href="https://www.w3schools.com">
          <Title weight="bold1">ABOUT</Title>
      </TitleLink>
      <TitleBar $xPos={xPos} $width={width}/>
    </Wrapper>
)};

const Wrapper = styled.div`
  display: inline-block;
  height: 100px;
`;

const Title = styled(Paragraph)`
user-select: none;

transition: ${({theme}) => `${theme.speed.normal}`};
color: ${({theme}) => theme.colors.textPassive1};

`;

const TitleLink = styled.a<{$margin: number}>`
  height: 100%;
  margin: 0 ${({$margin}) => $margin}px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  &:hover :first-child {
    color: ${({theme}) => theme.colors.text};
  }
`;

const TitleBar = styled.div<{$xPos: number, $width: number }>`
  top: 0px;
  left: ${({$xPos}) => $xPos}px;
  width: ${({$width}) => $width}px;  

  height: 2px;
  position: relative;
  pointer-events: none;

  transition: ${({theme}) => `${theme.speed.normal}`};

  background: black;
`;