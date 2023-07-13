import { useEffect, useState } from 'react';
import { GalleryModal } from '../UI/components/groups/GalleryModal/GalleryModal';
import { VisualArtsImages } from '../utilities/ImportImages';
import useOnNewPageMount from '../utilities/useOnNewPageMount';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utilities/routes';
import { LoadingBlank } from '../UI/components/other/LoadingBlank';
import {
  Loading,
  MAXIMUM_DURATION,
} from '../UI/components/other/Loading/Loading';

const IMAGES = [
  {
    src: VisualArtsImages.get('Night_Skirmishes_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Night_Skirmishes'),
    alt: 'Night Skirmishes (2018, Acrylic on Canvas)',
  },
  {
    src: VisualArtsImages.get('Corruption_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Corruption'),
    alt: 'Corruption (2020, Photo Manipulation)',
  },
  {
    src: VisualArtsImages.get('Memory_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Memory'),
    alt: 'Memory (2019, Watercolor)',
  },
  {
    src: VisualArtsImages.get('Focus_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Focus'),
    alt: 'Focus (2018, Watercolor)',
  },
  {
    src: VisualArtsImages.get('Storm_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Storm'),
    alt: 'Storm (2018, Acrylic on Canvas)',
  },
  {
    src: VisualArtsImages.get('Reach_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Reach'),
    alt: 'Reach (2017, Photography)',
  },
  {
    src: VisualArtsImages.get('Amethyst_City_1280.png'),
    srcSet: VisualArtsImages.getSrcSet('Amethyst_City'),
    alt: 'Amethyst City (2018, Acrylic on Canvas)',
  },
];

export const PageVisualArts: React.FC = (): React.ReactElement => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  useOnNewPageMount(`ELSON LIANG | Visual Arts`);
  const navigate = useNavigate();

  /*
  useEffect(() => {
    const timeout = setTimeout(
      () => setIsLoaderVisible(false),
      MAXIMUM_DURATION
    );

    return () => clearTimeout(timeout);
  }, []);
  */

  return (
    <>
      <GalleryModal
        images={IMAGES}
        initialIndex={0}
        isVisible={true}
        onCloseClick={() => setIsRedirecting(true)}
      />
      <LoadingBlank
        isVisible={isRedirecting}
        onVisibleComplete={() => navigate(ROUTES.projects)}
      />
      {/*<Loading isVisible={isLoaderVisible} />*/}
    </>
  );
};
