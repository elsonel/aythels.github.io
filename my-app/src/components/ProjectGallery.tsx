import { useState } from 'react';
import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';

import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import { GalleryProject } from '../UI/components/groups/GalleryProject';
import { getSizes } from 'UI/utility/scripts/ResponsiveImageGenerator';
import { Fact } from 'UI/components/atoms/GalleryProjectPanel';
import styled from 'styled-components';
import { PageTitle } from 'UI/components/atoms/PageTitle';
import { Title } from './Title';

export interface IPanelData {
  title: string;
  subtitle: string;
  body: React.ReactNode[];
  facts: Fact[];
}

export interface IImage {
  src: string;
  srcSet?: string;
  caption?: string;
}

export interface IGrid {
  breakpoints: GridBreakpoint[];
  images: IImage[];
}

export type IGridsData = IGrid[];

export interface ProjectGalleryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  panelData: IPanelData;
  gridsData: IGridsData;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  panelData,
  gridsData,
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOffset, setModalOffset] = useState(0);

  return (
    <div {...props}>
      <Title subtitle={panelData.subtitle}>{panelData.title}</Title>
      <StyledGalleryProject body={panelData.body} facts={panelData.facts}>
        {gridsData.map((grid, gridIndex) => (
          <StyledGrid breakpoints={grid.breakpoints} key={gridIndex}>
            {grid.images.map((image, imageIndex) => (
              <ImageThumbnail
                key={imageIndex}
                alt={image.src}
                src={image.src}
                srcSet={image.srcSet}
                sizes={getSizes(grid.breakpoints)}
                onClick={() => {
                  let toAdd = 0;
                  for (let i = 0; i < gridsData.length; i++) {
                    if (i === gridIndex) break;
                    gridsData[i].images.forEach(() => toAdd++);
                  }

                  setIsModalOpen(true);
                  setModalOffset(imageIndex + toAdd);
                }}
              />
            ))}
          </StyledGrid>
        ))}
      </StyledGalleryProject>
    </div>
  );
};

const StyledGalleryProject = styled(GalleryProject)`
  padding-top: 0px;
  padding-bottom: 60px;
`;

const StyledGrid = styled(Grid)`
  justify-content: center;
`;
