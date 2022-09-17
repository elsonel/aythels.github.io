import styled from 'styled-components';
import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { LinkFake } from '../UI/components/inputs/LinkFake';
import { Grid, GridBreakpoint } from '../UI/components/layout/Grid';
import useGoTo from '../utility/useGoTo';
import { IGallerySortable } from '../utility/sort';

export interface IGalleryEntry extends IGallerySortable {
  date: Date;
  title: string;
  subtitle: string;
  src: string;
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
        <LinkFake href={e.to} key={i}>
          <ImageThumbnail
            key={e.src}
            onClick={() => e.to && goTo(e.to)}
            subtitle={e.subtitle}
            title={e.title}
            src={e.src}
            isTitleVisible={true}
            imageWidth={1}
            imageHeight={1}
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
