import React, { useEffect, useRef, useState } from 'react';
import { PageNavButtons } from '../UI/components/inputs/PageNavButtons';
import { ROUTES } from '../utilities/routes';
import {
  Body,
  ParagraphData,
} from '../UI/components/groups/ProjectDetailsPage/Body/Body';
import {
  LANDING_SCROLL_LENGTH,
  Landing,
} from '../UI/components/groups/ProjectDetailsPage/Landing/Landing';
import {
  Loading,
  MINIMUM_DURATION,
} from '../UI/components/other/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { LoadingBlank } from '../UI/components/other/LoadingBlank/LoadingBlank';
import { Frame } from '../UI/components/atoms/Frame/Frame';
import { Header } from '../UI/components/groups/Header/Header';
import { HeaderTabIcon } from '../UI/components/groups/Header/HeaderTabIcon/HeaderTabIcon';
import { HeaderTab } from '../UI/components/groups/Header/HeaderTab/HeaderTab';
import { FactData } from '../UI/components/groups/ProjectDetailsPage/FactsList/FactsList';
import useOnNewPageMount from '../utilities/useOnNewPageMount';
import { ImageProps } from '../UI/components/atoms/Image';

export interface IProjectTemplateProps {
  projectLandingImage: ImageProps;
  projectTitle: string;
  projectSubtitle: string;
  projectPrototypeLink?: string;
  projectFacts: FactData[];
  projectParagraphs: ParagraphData[];
  projectImagesDesktop?: ImageProps[][];
  projectImagesMobile?: ImageProps[][];
  backRoute?: string;
  forwardRoute?: string;
  pageTitle: string;
}

export const ProjectTemplate: React.FC<IProjectTemplateProps> = ({
  projectLandingImage,
  projectTitle,
  projectSubtitle,
  projectPrototypeLink,
  projectFacts,
  projectParagraphs,
  projectImagesDesktop,
  projectImagesMobile,
  backRoute,
  forwardRoute,
  pageTitle,
}): React.ReactElement => {
  const isBodyAssetsLoaded = useRef(false);
  const isLandingImageLoaded = useRef(false);
  const [isFinishedLoading, setIsFinishedLoading] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [navTarget, setNavTarget] = useState<string>();
  const navigate = useNavigate();
  useOnNewPageMount(pageTitle);

  useEffect(() => {
    if (!isFinishedLoading) return;

    const timeout = setTimeout(
      () => setIsLoaderVisible(false),
      MINIMUM_DURATION
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [isFinishedLoading]);

  return (
    <>
      <Body
        scrollStart={LANDING_SCROLL_LENGTH}
        title={projectTitle}
        facts={projectFacts}
        paragraphs={projectParagraphs}
        imagesDesktop={projectImagesDesktop}
        imagesMobile={projectImagesMobile}
        onAssetsLoad={() => {
          isBodyAssetsLoaded.current = true;
          if (isBodyAssetsLoaded.current && isLandingImageLoaded.current)
            setIsFinishedLoading(true);
        }}
      />
      <Frame isAnimating={false} />
      <PageNavButtons
        backHref={backRoute}
        forwardHref={forwardRoute}
        onBackClick={() => backRoute && setNavTarget(backRoute)}
        onForwardClick={() => forwardRoute && setNavTarget(forwardRoute)}
      />
      <Header
        isAnimating={false}
        tabIcon={
          <HeaderTabIcon
            href={ROUTES.index}
            onClick={() => setNavTarget(ROUTES.index)}
          />
        }
      >
        <HeaderTab
          href={ROUTES.projects}
          isActive={true}
          onClick={() => setNavTarget(ROUTES.projects)}
        >
          PROJECTS
        </HeaderTab>
        <HeaderTab
          href={ROUTES.about}
          isActive={false}
          onClick={() => setNavTarget(ROUTES.about)}
        >
          ABOUT
        </HeaderTab>
      </Header>
      <Landing
        scrollLength={LANDING_SCROLL_LENGTH}
        title={projectTitle}
        subtitle={projectSubtitle}
        prototypeHref={projectPrototypeLink}
        image={projectLandingImage}
        isTextLoaded={!isLoaderVisible}
        onImageLoad={() => {
          isLandingImageLoaded.current = true;
          if (isBodyAssetsLoaded.current && isLandingImageLoaded.current)
            setIsFinishedLoading(true);
        }}
      />
      <Loading isVisible={isLoaderVisible} />
      <LoadingBlank
        isVisible={!!navTarget}
        onVisibleComplete={() => navTarget && navigate(navTarget)}
      />
    </>
  );
};
