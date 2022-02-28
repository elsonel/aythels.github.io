import React from 'react';
import styled from "styled-components";
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Image } from '../../images/Image/Image';
import { ChipList } from '../../other/ChipList/ChipList';
import { Chip } from '../../other/Chip/Chip';
import { DesignServices } from 'styled-icons/material';

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The label of the chip
   */
  label?: string;
}

export const About: React.FC<AboutProps> = ({
  label,
  ...props
}): React.ReactElement => { 
  return (
  <div>
  <LeftDiv>
    <Paragraph size="4em" weight="bold2">DEVELOPER,</Paragraph>
    <Paragraph size="4em" weight="bold2">DESIGNER,</Paragraph>
    <Paragraph size="4em" weight="bold2">ARTIST.</Paragraph>
    <Paragraph>
      Hi! I'm Elson, a Toronto and Vancouver based software developer with a formal design background and passion for the visual arts across multiple disciplines.
    </Paragraph>
    <br/>
    <Paragraph>
      Currently, I'm studying at the University of Toronto where I specialize in the Technology of Architecture.
    </Paragraph>
    <div>
      <StyledButton><Paragraph>MORE</Paragraph></StyledButton>
      <StyledButton><Paragraph>CONTACT</Paragraph></StyledButton>
    </div>
  </LeftDiv>
  <ChipList>
    <Chip icon={<DesignServices/>} label="PAINTING"/>
    <Chip icon={<DesignServices/>} label="GRAPHIC DESIGN"/>
    <Chip icon={<DesignServices/>} label="UI/UX DESIGN"/>
    <Chip icon={<DesignServices/>} label="PHOTO MANIPULATION"/>
    <Chip icon={<DesignServices/>} label="RENDERING"/>
    <Chip icon={<DesignServices/>} label="ARCHITECTURE"/>
    <Chip icon={<DesignServices/>} label="3D MODELING"/>
    <Chip icon={<DesignServices/>} label="RIGGING"/>
  </ChipList>
  </div>
)};

const LeftDiv = styled.div`
    width: 500px;
`
const StyledButton = styled.button`
  margin-right: 12px;
    background: black;

    ${({theme}) => `
    padding: 12px 40px;

    border: 1.5px solid ${theme.colors.textPassive2};
    transition: ${theme.speed.normal};

    color: ${theme.colors.text};

    background: ${theme.colors.background};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.background};
    }
    `
  };
`