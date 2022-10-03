import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ImageTitle } from 'UI/components/atoms/ImageTitle';
import { getSizes } from 'UI/utility/scripts/ResponsiveImageGenerator';
import { ThemeInterface } from 'UI/utility/themes/Theme';
import { ImageThumbnailAspect } from '../UI/components/atoms/ImageThumbnailAspect';
import { ModalImage } from '../UI/components/groups/ModalImage';
import { GridDynamic } from '../UI/components/layout/GridDynamic';
import { getAspect } from '../UI/utility/scripts/Aspect';
import { GalleryGridProps, IGalleryBase, IGalleryEntry } from './GalleryGrid';

export interface IGalleryEntryArt extends IGalleryBase {
  caption: string;
  width: number;
  height: number;
}

export interface GalleryGridArtProps extends GalleryGridProps {
  data: IGalleryEntryArt[];
}

export const GalleryGridArt: React.FC<GalleryGridArtProps> = ({
  data,
  breakpoints,
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOffset, setModalOffset] = useState(0);
  const theme = useTheme() as ThemeInterface;

  return (
    <>
      <GridStyled breakpoints={breakpoints} {...props}>
        {data.map((e, i) => (
          <ImageThumbnailAspect
            key={e.src}
            onClick={() => {
              setModalOffset(i);
              setIsModalOpen(true);
            }}
            overlayElement={
              <ImageTitle
                color={theme.color.background}
                title={e.title}
                subtitle={e.subtitle}
              />
            }
            alt={e.title}
            src={e.src}
            srcSet={e.srcSet}
            sizes={getSizes(breakpoints)}
            isFillingParent={true}
            aspect={getAspect(e.width, e.height)}
          />
        ))}
      </GridStyled>
      <ModalImage
        onCloseClick={() => setIsModalOpen(false)}
        indexOffset={modalOffset}
        isVisible={isModalOpen}
        srcArray={data.map((e) => {
          return {
            alt: e.title,
            src: e.src,
            srcSet: e.srcSet,
            title: e.title,
            caption: e.caption,
          };
        })}
      />
    </>
  );
};

const GridStyled = styled(GridDynamic)`
  box-sizing: border-box;
  padding: 20px;
`;
