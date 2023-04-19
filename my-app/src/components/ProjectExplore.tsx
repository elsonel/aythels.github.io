import { useTheme } from 'styled-components';
import { ImageTitle } from 'UI/components/atoms/ImageTitle';
import { getSizes } from 'UI/utilities/scripts/ResponsiveImageGenerator';
import { ThemeInterface } from 'UI/utilities/themes/Theme';
import { ImageThumbnailAspect } from '../UI/components/atoms/ImageThumbnailAspect';
import { Explore, EXPLORE_BREAKPOINTS } from '../UI/components/groups/Explore';
import { LinkFake } from '../UI/components/inputs/LinkFake';
import useGoTo from '../utilities/useGoTo';

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
  const theme = useTheme() as ThemeInterface;
  const goTo = useGoTo();

  return (
    <Explore title="EXPLORE" breakpoints={EXPLORE_BREAKPOINTS} {...props}>
      {exploreData.map((e, i) => (
        <LinkFake href={e.to} key={i}>
          <ImageThumbnailAspect
            src={e.src}
            srcSet={e.src}
            sizes={getSizes(EXPLORE_BREAKPOINTS)}
            overlayElement={
              <ImageTitle
                color={theme.color.background}
                title={e.title}
                subtitle={e.subtitle}
              />
            }
            aspect={1}
            isOverlayVisible={true}
            onClick={() => e.to && goTo(e.to)}
          />
        </LinkFake>
      ))}
    </Explore>
  );
};
