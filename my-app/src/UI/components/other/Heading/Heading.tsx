import styled from "styled-components";
import { HeaderTitles } from '../HeaderTitles/HeaderTitles';
import { Icon } from "../Icon/Icon";

export type HeadingProps = {
    activeTitle?: "projects" | "about";
}

export const Heading = ({
    activeTitle,
    ...props
  }: HeadingProps) => {

    return (
      <Wrapper {...props}>
        <LogoLink href="https://www.w3schools.com">
          <Icon src="/icons/logo.svg" size={32} />
        </LogoLink>
        <TitlesWrapper activeTitle={activeTitle} />
      </Wrapper>
    );
  };

  const LogoLink = styled.a`
    display: flex;
    margin: 0 40px;
  `;

  const TitlesWrapper = styled(HeaderTitles)`
    height: 50%;
    margin: 0 20px;
  ` 

  const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100px;
  
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: red;
  `;