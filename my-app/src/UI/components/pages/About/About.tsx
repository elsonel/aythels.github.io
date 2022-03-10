import React from 'react';
import styled from "styled-components";
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Image } from '../../images/Image/Image';
import { ChipList } from '../../other/ChipList/ChipList';
import { Chip } from '../../other/Chip/Chip';
import { DesignServices } from 'styled-icons/material';
import { RoundBrush } from '@styled-icons/entypo/RoundBrush';
import { Web } from '@styled-icons/material-outlined/Web';
import { InsertPhoto } from '@styled-icons/material/InsertPhoto';
import { Camera } from '@styled-icons/boxicons-solid/Camera';
import { Bank } from '@styled-icons/boxicons-solid/Bank';
import { Cube } from '@styled-icons/evaicons-solid/Cube';
import { Man } from '@styled-icons/entypo/Man';
import { Icon } from '../../other/Icon/Icon';
import { ButtonLanding } from '../../inputs/ButtonLanding/ButtonLanding';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Title } from '../../text/Title/Title';

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
  <PageWrapper>
  <LeftDiv>
    <Title size='large'>DEVELOPER,</Title>
    <Title size='large'>DESIGNER,</Title>
    <Title size='large'>ARTIST</Title>
    <Paragraph>
      Hi! I'm Elson, a Toronto and Vancouver based software developer with a formal design background and passion for the visual arts across multiple disciplines.
    </Paragraph>
    <br/>
    <Paragraph>
      Currently, I'm studying at the University of Toronto where I specialize in the Technology of Architecture.
    </Paragraph>
    <div>
      <ButtonLanding>MORE</ButtonLanding>
      <ButtonLanding>CONTACT</ButtonLanding>
    </div>
  </LeftDiv>
  <ChipList>
    <Chip icon={<RoundBrush/>} label="PAINTING"/>
    <Chip icon={<DesignServices/>} label="GRAPHIC DESIGN"/>
    <Chip icon={<Web/>} label="UI/UX DESIGN"/>
    <Chip icon={<InsertPhoto/>} label="PHOTO MANIPULATION"/>
    <Chip icon={<Camera/>} label="RENDERING"/>
    <Chip icon={<Bank/>} label="ARCHITECTURE"/>
    <Chip icon={<Cube/>} label="3D MODELING"/>
    <Chip icon={<Man/>} label="ANIMATION"/>
  </ChipList>

  <Paragraph size="4em" lineHeight="1.2em" weight="bold2">DEVELOPER</Paragraph>
  <Paragraph>
    I've been able to gather a few skills here and there throughout my academic and professional experiences, and I'm always eager to continue developing them, as well as learning new skills.
  </Paragraph>
  <ButtonLanding>GITHUB</ButtonLanding>
  <ChipList>
    <Chip icon={<Icon src="/icons/Photoshop.svg"/>} label="PHOTOSHOP" />
    <Chip icon={<DesignServices />} label="ILLUSTRATOR"/>
    <Chip icon={<Web/>} label="ADOBE XD"/>
    <Chip icon={<InsertPhoto/>} label="FIGMA"/>
    <Chip icon={<Camera/>} label="BLENDER"/>
    <Chip icon={<Bank/>} label="AUTOCAD"/>
    <Chip icon={<Cube/>} label="RHINO"/>
    <Chip icon={<Man/>} label="GRASSHOPPER"/>
  </ChipList>
  </PageWrapper>
)};

const PageWrapper = styled.div`
    width: 100%;
    padding: 0px 10%;
    box-sizing: border-box;
`

const LeftDiv = styled.div`
    width: 500px;
`;