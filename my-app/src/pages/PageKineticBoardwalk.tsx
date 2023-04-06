import React, { useContext, useEffect } from 'react';
import { LoadingContext } from '../utility/LoadingContext';
import { PageNavButtons } from '../UI/components/inputs/PageNavButtons';
import { ROUTES } from '../utility/routes';
import { Frame } from '../UI/components/atoms/Frame/Frame';
import { Body } from '../UI/components/groups/ProjectDetailsPage/Body/Body';
import {
  LANDING_SCROLL_LENGTH,
  Landing,
} from '../UI/components/groups/ProjectDetailsPage/Landing/Landing';

const LANDING_IMAGE = '/images/examples/landscape.jpg';
const TITLE = 'KINETIC BOARDWALK';
const SUBTITLE = 'Drifting Landscapes';
const FACTS = [
  {
    label: 'TYPE',
    value: 'Public Mega-Infastructure',
  },
  {
    label: 'REGION',
    value: 'Los Angeles, California',
  },
  {
    label: 'SUPERVISOR',
    value: 'Nathan Bishop (ARC380)',
  },
  {
    label: 'COLLABORATORS',
    value: 'Elson Liang, Omar Abdellatif',
  },
  {
    label: 'COMPLETED',
    value: 'December 2020',
  },
];

const PARAGRAPHS = [
  {
    title: undefined,
    body: `                  
      The Kinetic Boardwalk is an adaptive and programmable system
      of inflating tiles that span the coastline of Venice Beach.
      Acting as both a public amenity and functional
      infrastructure, the structure aims to address high tides and
      rising water levels while substituting as an exhibitive
      pedestrian walkway.
    `,
  },
  {
    title: `Inspired By Sand Dunes and Grass Hills`,
    body: `                  
      The Kinetic Boardwalk's form is made up of a modular system
      of "bumps" that can be mechanically controlled to
      individually rise or flatten at will. A variety of built
      environments with different use cases are created. The bump
      can be used as a deployable floodwall against high tides, a
      lookout point or rest area for pedestrians.
    `,
  },
  {
    title: `A Mechanized System`,
    body: `                  
      Each bump is made up of a grid of interlocking tiles layered
      over inflatables which are powered by motorized air pumps.
      The tiles rise at different elevations when the round
      inflatables hidden underneath are powered to create the
      appearance of a curved surface. Rubber flaps connect each
      tile length wise, hiding cracks and providing a water-tight
      seal.
    `,
  },
];

const PAGE_TITLE = `ELSON LIANG | Kinetic Boardwalk`;

export const PageKineticBoardwalk: React.FC = (): React.ReactElement => {
  const { isLoaded, finishLoad, isFirstLoad } = useContext(LoadingContext);

  useEffect(() => {
    finishLoad();
    document.title = PAGE_TITLE;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Body
        scrollStart={LANDING_SCROLL_LENGTH}
        title={TITLE}
        facts={FACTS}
        paragraphs={PARAGRAPHS}
      />
      <PageNavButtons
        backHref={ROUTES.architecture.foldPavilion}
        forwardHref={ROUTES.architecture.basiliskTower}
      />
      <Landing
        scrollLength={LANDING_SCROLL_LENGTH}
        title={TITLE}
        subtitle={SUBTITLE}
        imageSrc={LANDING_IMAGE}
      />
    </>
  );
};
