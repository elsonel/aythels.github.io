import React, { useContext, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { Frame } from '../../UI/components/atoms/Frame/Frame';
import usePageTitle from '../../UI/utility/hooks/usePageTitle';
import { LoadingContext } from '../../utility/LoadingContext';

export interface IPageAboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageAbout: React.FC<IPageAboutProps> = ({
  ...props
}): React.ReactElement => {
  usePageTitle(`Elson Liang | Developer & Designer`);
  const { speed } = useTheme();
  const { goTo, finishLoad, isLoaded } = useContext(LoadingContext);

  useEffect(() => {
    finishLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Frame isLoaded={isLoaded} delay={speed.loading} />
      <StyledButton onClick={() => goTo('/projects')}>
        Go To Projects
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  width: 300px;
  height: 300px;
  background-color: yellow;
`;
