import { useState } from 'react';
import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { ModalImage } from '../UI/components/groups/ModalImage';
import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import { GalleryProject } from '../UI/components/groups/GalleryProject';
import { getSizes } from 'UI/utility/scripts/ResponsiveImageGenerator';

export interface IFact {
  label: string;
  value: string;
  to?: string;
}

export interface IPanelData {
  title: string;
  subtitle: string;
  body: string[];
  facts: IFact[];
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
          </Grid>
        ))}
      </GalleryProject>
      <ModalImage
        onCloseClick={() => setIsModalOpen(false)}
        indexOffset={modalOffset}
        isVisible={isModalOpen}
        srcArray={gridsData
          .map((grid) => grid.images)
          .flat()
          .map((image) => {
            return {
              alt: image.caption,
              src: image.src,
              srcSet: image.srcSet,
              caption: image.caption,
            };
          })}
      />
    </div>
  );
};
