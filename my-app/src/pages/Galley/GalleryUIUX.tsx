import styled from 'styled-components';
import { GalleryProjectEntry } from '../../data/data';
import { ImageThumbnail } from '../../UI/components/atoms/ImageThumbnail';
import {
  GridBreakpoint,
  GridSquare,
} from '../../UI/components/layout/GridSquare';

const BREAKPOINTS: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
    columnCount: 3,
  },
];

export interface GalleryUIUXProps extends React.HTMLAttributes<HTMLDivElement> {
  onThumbnailClick: (i: number) => void;
  data: GalleryProjectEntry[];
}

export const GalleryUIUX: React.FC<GalleryUIUXProps> = ({
  onThumbnailClick,
  data,
  ...props
}): React.ReactElement => {
  return (
    <StyledGridSquare breakpoints={BREAKPOINTS} {...props}>
      {data.map((e, i) => (
        <ImageThumbnail
          key={e.src}
          onClick={() => onThumbnailClick(i)}
          subtitle={e.subtitle}
          title={e.title}
          src={e.src}
          isTitleVisible={true}
        />
      ))}
    </StyledGridSquare>
  );
};

const StyledGridSquare = styled(GridSquare)`
  justify-content: center;
`;
