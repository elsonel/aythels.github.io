import styled, { useTheme } from 'styled-components';
import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import { ImageThumbnailAspect } from '../UI/components/atoms/ImageThumbnailAspect';
import { getSizes } from 'UI/utility/scripts/ResponsiveImageGenerator';
import { ThemeInterface } from 'UI/utility/themes/Theme';
import { ThumbnailPanel } from 'UI/components/atoms/ThumbnailPanel';
import { IGalleryBase } from './GalleryGrid';

export interface IProjectEntry extends IGalleryBase {
  description: string;
  githubLink: string;
  prototypeLink: string;
}

export interface ProjectsGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: IProjectEntry[];
  breakpoints: GridBreakpoint[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  data,
  breakpoints,
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <GridStyled breakpoints={breakpoints} {...props}>
      {data.map((e) => (
        <Thumbnail
          key={e.src}
          overlayElement={
            <ThumbnailPanel
              title={e.title}
              subtitle={e.subtitle}
              description={e.description}
              githubLink={e.githubLink}
              prototypeLink={e.prototypeLink}
            />
          }
          isOverlayVisible={true}
          alt={e.title}
          src={e.src}
          srcSet={e.src}
          sizes={getSizes(breakpoints)}
          aspect={1}
        />
      ))}
    </GridStyled>
  );
};

const GridStyled = styled(Grid)`
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
`;

const Thumbnail = styled(ImageThumbnailAspect)`
  cursor: auto;
`;
