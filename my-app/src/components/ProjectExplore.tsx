import { ImageThumbnail } from '../UI/components/atoms/ImageThumbnail';
import { Explore } from '../UI/components/groups/Explore';
import { LinkFake } from '../UI/components/inputs/LinkFake';
import useGoTo from '../utility/useGoTo';

export interface IExplore {
  src: string;
  title: string;
  subtitle: string;
  to?: string;
}

export type IExploreData = IExplore[];

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
        <LinkFake href={e.to} key={i}>
          <ImageThumbnail
            src={e.src}
            title={e.title}
            subtitle={e.subtitle}
            imageWidth={1}
            imageHeight={1}
            isTitleVisible={true}
            onClick={() => e.to && goTo(e.to)}
          />
        </LinkFake>
      ))}
    </Explore>
  );
};
