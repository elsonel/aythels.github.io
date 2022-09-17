import { useState } from 'react';
import styled from 'styled-components';
import { GalleryProjectPanel } from '../UI/components/atoms/GalleryProjectPanel';
import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { ModalImage } from '../UI/components/groups/ModalImage';
import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import { GalleryProject } from '../UI/components/groups/GalleryProject';

export interface Fact {
  label: string;
  value: string;
  to?: string;
}

export interface IPanelData {
  title: string;
  subtitle: string;
  body: string[];
  facts: Fact[];
}

export interface Image {
  src: string;
  caption?: string;
}

export interface Grid {
  breakpoints: GridBreakpoint[];
  images: Image[];
}

export type IGridsData = Grid[];

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
      <GalleryProject
        title={panelData.title}
        subtitle={panelData.subtitle}
        body={panelData.body}
        facts={panelData.facts}
      >
        {gridsData.map((grid, gridIndex) => (
          <Grid breakpoints={grid.breakpoints} key={gridIndex}>
            {grid.images.map((image, imageIndex) => (
              <ImageThumbnail
                key={imageIndex}
                src={image.src}
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
          </Grid>
        ))}
      </GalleryProject>
      <ModalImage
        onClick={() => setIsModalOpen(false)}
        indexOffset={modalOffset}
        isVisible={isModalOpen}
        srcArray={gridsData.map((grid) => grid.images).flat()}
      />
    </div>
  );
};
