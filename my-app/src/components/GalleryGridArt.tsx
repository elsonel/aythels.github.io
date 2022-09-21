import { useState } from 'react';
import styled from 'styled-components';
import { ImageThumbnailFixed } from '../UI/components/atoms/ImageThumbnailFixed';
import { ModalImage } from '../UI/components/groups/ModalImage';
import { GridDynamic } from '../UI/components/layout/GridDynamic';
import { GalleryGridProps, IGalleryEntry } from './GalleryGrid';

export interface IGalleryEntryArt extends IGalleryEntry {
  caption: string;
  width: number;
  height: number;
}

export interface GalleryGridArtProps extends GalleryGridProps {
  data: IGalleryEntryArt[];
}

export const GalleryGridArt: React.FC<GalleryGridArtProps> = ({
  data,
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOffset, setModalOffset] = useState(0);

  return (
    <>
      <GridStyled {...props}>
        {data.map((e, i) => (
          <ImageThumbnailFixed
            key={e.src}
            onClick={() => {
              setModalOffset(i);
              setIsModalOpen(true);
            }}
            subtitle={e.subtitle}
            title={e.title}
            src={e.src}
            imageWidth={e.width}
            imageHeight={e.height}
          />
        ))}
      </GridStyled>
      <ModalImage
        onCloseClick={() => setIsModalOpen(false)}
        indexOffset={modalOffset}
        isVisible={isModalOpen}
        srcArray={data}
      />
    </>
  );
};

const GridStyled = styled(GridDynamic)`
  box-sizing: border-box;
  padding: 20px;
`;