import { useState } from 'react';
import styled from 'styled-components';
import { _GalleryArchitectureData } from '../../../../data/data';
import { GalleryProjectPanel } from '../../../../UI/components/atoms/GalleryProjectPanel';
import { ImageThumbnail } from '../../../../UI/components/atoms/ImageThumbnail';
import { ProjectSectionFact } from '../../../../UI/components/atoms/ProjectSectionFact';
import { Explore } from '../../../../UI/components/groups/Explore';
import { GalleryProject } from '../../../../UI/components/groups/GalleryProject';
import { ModalImage } from '../../../../UI/components/groups/ModalImage';
import { Grid } from '../../../../UI/components/layout/Grid';
import { toTitleCase } from '../../../../UI/utility/scripts/Text';
import { HeaderFooter } from '../../../templates/HeaderFooter';
import {
  BREAKPOINTS_1,
  BREAKPOINTS_2,
  BREAKPOINTS_3,
  IMAGES_1,
  IMAGES_2,
  IMAGES_3,
} from './data';

const INDEX_DATA = _GalleryArchitectureData.find(
  (e) => e.title === 'KINETIC BOARDWALK'
);
if (!INDEX_DATA) throw 'Invalid project';

export interface IkineticboardwalkProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Kineticboardwalk: React.FC<IkineticboardwalkProps> = ({
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOffset, setModalOffset] = useState(0);

  return (
    <div {...props}>
      <HeaderFooter reset={() => {}}>
        <GalleryProjectStyled>
          <GalleryProjectPanel
            title={toTitleCase(INDEX_DATA!.title)}
            subtitle={toTitleCase(INDEX_DATA!.subtitle)}
            body={[
              'The Kinetic Boardwalk is a programmable system of inflating tiles spanning the coast of Venice Beach. This project addresses the California flood crisis in both an infrastructural and public-friendly manner; a series of embedded inflatables create a variety of built environments including a  deployable floodwall in case of high tides. Each form the boardwalk takes provides a different function and user experience. The Kinetic Boardwalk is a reactive system that responds to an environmental concern in a more adaptable way.',
              'The boardwalk is a layered system consisting of a motorized air pump which powers a deployable inflatable. The inflation pushes onto a modernized grid of “brick” which act as the surface platform. A closer look at the individual bricks reveals a pair of rotating pins which mechanize the surface “breakage” or extrusion. This gives the illusion of a flexible boardwalk with the benefits of a solid material. Rubber flaps are used to create seals where the surface would be broken, providing a water tight system.',
            ]}
            facts={[
              <ProjectSectionFact
                label="TYPE"
                value="Public Mega-Infastructure"
              />,
              <ProjectSectionFact label="REGION" value="Venice, Los Angeles" />,
              <ProjectSectionFact
                label="SUPERVISOR"
                value="Nathan Bishop (ARC380)"
              />,
              <ProjectSectionFact
                label="COLLABORATORS"
                value="Elson Liang, Omar Abdellatif"
              />,
              <ProjectSectionFact label="COMPLETED" value="December 2020" />,
            ]}
          />
          <GridStyled breakpoints={BREAKPOINTS_1}>
            {IMAGES_1.map((e, i) => (
              <ImageThumbnail
                key={i}
                src={e.src}
                onClick={() => {
                  setIsModalOpen(true);
                  setModalOffset(i);
                }}
              />
            ))}
          </GridStyled>
          <GridStyled breakpoints={BREAKPOINTS_2}>
            {IMAGES_2.map((e, i) => (
              <ImageThumbnail
                key={i}
                src={e.src}
                onClick={() => {
                  setIsModalOpen(true);
                  setModalOffset(i + IMAGES_1.length);
                }}
              />
            ))}
          </GridStyled>
          <GridStyled breakpoints={BREAKPOINTS_3}>
            {IMAGES_3.map((e, i) => (
              <ImageThumbnail
                key={i}
                src={e.src}
                onClick={() => {
                  setIsModalOpen(true);
                  setModalOffset(i + IMAGES_1.length + IMAGES_2.length);
                }}
              />
            ))}
          </GridStyled>
        </GalleryProjectStyled>
        <Explore title="EXPLORE">
          {_GalleryArchitectureData
            .filter((e) => e !== INDEX_DATA)
            .map((e, i) => (
              <ImageThumbnail
                key={i}
                src={e.src}
                title={e.title}
                subtitle={e.subtitle}
                imageWidth={1}
                imageHeight={1}
              />
            ))}
        </Explore>
      </HeaderFooter>
      <ModalImage
        onClick={() => setIsModalOpen(false)}
        indexOffset={modalOffset}
        isVisible={isModalOpen}
        srcArray={[...IMAGES_1, ...IMAGES_2, ...IMAGES_3].map((e) => {
          return { src: e.src, caption: e.caption };
        })}
      />
    </div>
  );
};

const GalleryProjectStyled = styled(GalleryProject)`
  padding-top: 0px;
`;

const GridStyled = styled(Grid)`
  padding: 0px;
`;
