import React from 'react';
import { useTheme } from 'styled-components';
import { Landing } from './Landing/Landing';
import { Body } from './Body/Body';

const LANDING_SCROLL_LENGTH = 800;

export interface IProjectDetailsPageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
  delay?: number;
  title: string;
  facts: { label: string; value: string }[];
  paragraphs: { title?: string; body: string }[];
}

export const ProjectDetailsPage: React.FC<IProjectDetailsPageProps> = ({
  isLoaded = true,
  delay = 0,
  title,
  facts,
  paragraphs,
  ...props
}): React.ReactElement => {
  const { image } = useTheme();

  return (
    <>
      <Body
        scrollStart={LANDING_SCROLL_LENGTH}
        title={title}
        facts={facts}
        paragraphs={paragraphs}
      />
      <Landing
        scrollLength={LANDING_SCROLL_LENGTH}
        title={title}
        subtitle={'PLACEHOLDER'}
        image={{ src: image.exampleSquare, alt: 'Landing Image' }}
      />
    </>
  );
};
