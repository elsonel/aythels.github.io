import styled, { useTheme } from 'styled-components';
import { LinkFake } from '../UI/components/inputs/LinkFake';
import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import useGoTo from '../utility/useGoTo';
import { IGallerySortable } from '../utility/Sort';
import { ImageThumbnailAspect } from '../UI/components/atoms/ImageThumbnailAspect';
import { getSizes } from 'UI/utility/scripts/ResponsiveImageGenerator';
import { ImageTitle } from 'UI/components/atoms/ImageTitle';
import { ThemeInterface } from 'UI/utility/themes/Theme';

export interface IGalleryBase extends IGallerySortable {
  date: Date;
  title: string;
  subtitle: string;
  src: string;
  srcSet?: string;
  sizes?: string;
}

export interface IGalleryEntry extends IGalleryBase {
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
  const theme = useTheme() as ThemeInterface;

  return (
    <GridStyled breakpoints={breakpoints} {...props}>
      {data.map((e, i) => (
        <LinkFake href={e.to} key={e.src}>
          <ImageThumbnailAspect
            onClick={() => e.to && goTo(e.to)}
            overlayElement={
              <ImageTitle
                color={theme.color.background}
                title={e.title}
                subtitle={e.subtitle}
              />
            }
            alt={e.title}
            src={e.src}
            srcSet={e.src}
            sizes={getSizes(breakpoints)}
            isOverlayVisible={true}
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
