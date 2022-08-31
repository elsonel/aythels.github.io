import { GalleryVisualArtsEntry } from '../../data/data';
import { ImageThumbnailFixed } from '../../UI/components/atoms/ImageThumbnailFixed';
import { GridDynamic } from '../../UI/components/layout/GridDynamic';

export interface GalleryVisualArtsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onThumbnailClick: (i: number) => void;
  data: GalleryVisualArtsEntry[];
}

export const GalleryVisualArts: React.FC<GalleryVisualArtsProps> = ({
  onThumbnailClick,
  data,
  ...props
}): React.ReactElement => {
  return (
    <GridDynamic {...props}>
      {data.map((e, i) => (
        <ImageThumbnailFixed
          key={e.src}
          onClick={() => onThumbnailClick(i)}
          subtitle={e.subtitle}
          title={e.title}
          src={e.src}
          imageWidth={e.width}
          imageHeight={e.height}
        />
      ))}
    </GridDynamic>
  );
};
