import styled from 'styled-components';
import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { LinkFake } from '../UI/components/inputs/LinkFake';
import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import useGoTo from '../utility/useGoTo';
import { IGallerySortable } from '../utility/Sort';
import { ImageThumbnailAspect } from '../UI/components/atoms/ImageThumbnailAspect';
import { getSizes } from 'UI/utility/scripts/ResponsiveImageGenerator';

export interface IGalleryEntry extends IGallerySortable {
  date: Date;
  title: string;
  subtitle: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  to?: string;
}

export interface GalleryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IGalleryEntry[];
  breakpoints: GridBreakpoint[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  data,
  breakpoints,
  ...props
}): React.ReactElement => {
  const goTo = useGoTo();
  return (
    <GridStyled breakpoints={breakpoints} {...props}>
      {data.map((e, i) => (
        <LinkFake href={e.to} key={e.src}>
          <ImageThumbnailAspect
            onClick={() => e.to && goTo(e.to)}
            subtitle={e.subtitle}
            title={e.title}
            alt={e.title}
            src={e.src}
            srcSet={e.src}
            sizes={getSizes(breakpoints)}
            isTextAlwaysVisible={true}
            isFillingParent={true}
            aspect={1}
          />
        </LinkFake>
      ))}
    </GridStyled>
  );
};

const GridStyled = styled(Grid)`
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
`;
