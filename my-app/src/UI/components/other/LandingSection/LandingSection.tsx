import React from 'react';
import styled from 'styled-components';
import { InsertPhoto } from 'styled-icons/material';
import { ButtonLanding } from '../../inputs/ButtonLanding/ButtonLanding';
import { ChipList } from '../ChipList/ChipList';
import { Chip } from '../../other/Chip/Chip';
import { DesignServices } from 'styled-icons/material';
import { Web } from '@styled-icons/material-outlined/Web';
import { Camera } from '@styled-icons/boxicons-solid/Camera';
import { Bank } from '@styled-icons/boxicons-solid/Bank';
import { Cube } from '@styled-icons/evaicons-solid/Cube';
import { Man } from '@styled-icons/entypo/Man';
import { Icon } from '../../other/Icon/Icon';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { LessThan } from '../../../utility/ResponsiveCSS';
import { Title } from '../../text/Title/Title';
import { GreaterThanHook, LessThanHook } from '../../../utility/ResponsiveProps';

export interface LandingSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the icon
   */
  size?: number;
}

export const LandingSection: React.FC<LandingSectionProps> = ({
  children,
  ...props
}): React.ReactElement => { 

  const size = LessThanHook(500) ? 'small' : 'medium';

  return (
    <Wrapper {...props}>
      <Row>
        <RowEntry>
          <Title size={size}>DEVELOPER</Title>
          <Paragraph size={size}>
            I've been able to gather a few skills here and there throughout my academic and professional experiences, and I'm always eager to continue developing them, as well as learning new skills.
          </Paragraph>
          <a href="https://github.com/aythels" target="_blank" rel="noreferrer">
            <ButtonLanding size={size}>GITHUB</ButtonLanding>
          </a>
        </RowEntry>
        <RowEntry>
          <ChipList title="Languages" size={size}>
            <Chip icon={<Icon src="/icons/Photoshop.svg"/>} label="PHOTOSHOP"/>
            <Chip icon={<DesignServices />} label="ILLUSTRATOR"/>
            <Chip icon={<Web/>} label="ADOBE XD"/>
            <Chip icon={<InsertPhoto/>} label="FIGMA"/>
            <Chip icon={<Camera/>} label="BLENDER"/>
            <Chip icon={<Bank/>} label="AUTOCAD"/>
            <Chip icon={<Cube/>} label="RHINO"/>
            <Chip icon={<Man/>} label="GRASSHOPPER"/>
          </ChipList>
          <ChipList title="Frameworks" size={size}>
            <Chip icon={<Icon src="/icons/Photoshop.svg"/>} label="PHOTOSHOP" />
            <Chip icon={<DesignServices />} label="ILLUSTRATOR"/>
            <Chip icon={<Web/>} label="ADOBE XD"/>
            <Chip icon={<InsertPhoto/>} label="FIGMA"/>
            <Chip icon={<Camera/>} label="BLENDER"/>
            <Chip icon={<Bank/>} label="AUTOCAD"/>
            <Chip icon={<Cube/>} label="RHINO"/>
            <Chip icon={<Man/>} label="GRASSHOPPER"/>
          </ChipList>
        </RowEntry>
      </Row>
    </Wrapper>
)};

const Wrapper = styled.div`
  padding: 0 8%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

const RowEntry = styled.div`
  width: calc(50% - 40px);

  ${LessThan(900, `
    width: 100%;
  `)}

  > * {
    margin-bottom: 24px;
  }
`;