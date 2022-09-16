import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { Explore } from '../UI/components/groups/Explore';
import useGoTo from '../utility/useGoTo';

export interface Explore {
  src: string;
  title: string;
  subtitle: string;
  to: string;
}

export type IExploreData = Explore[];

export interface ProjectExploreProps
  extends React.HTMLAttributes<HTMLDivElement> {
  exploreData: IExploreData;
}

export const ProjectExplore: React.FC<ProjectExploreProps> = ({
  exploreData,
  ...props
}): React.ReactElement => {
  const goTo = useGoTo();

  return (
    <Explore title="EXPLORE" {...props}>
      {exploreData.map((e, i) => (
        <ImageThumbnail
          key={i}
          src={e.src}
          title={e.title}
          subtitle={e.subtitle}
          imageWidth={1}
          imageHeight={1}
          isTitleVisible={true}
          onClick={() => goTo(e.to)}
        />
      ))}
    </Explore>
  );
};
