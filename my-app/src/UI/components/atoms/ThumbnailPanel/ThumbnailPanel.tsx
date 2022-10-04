import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ButtonReverseText } from '../../inputs/ButtonReverseText';
import { Theme, ThemeInterface } from '../../../utility/themes/Theme';
import { Paragraph } from '../../text/Paragraph';
import { Github } from 'styled-icons/bootstrap';
import { ExternalLink } from '@styled-icons/feather/ExternalLink';
import { ImageTitle } from '../ImageTitle';
import { Link } from '../../inputs/Link/Link';

export interface ThumbnailPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  description: string;
  githubLink: string;
  prototypeLink: string;
}

export const ThumbnailPanel: React.FC<ThumbnailPanelProps> = ({
  title,
  subtitle,
  description,
  githubLink,
  prototypeLink,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme() as ThemeInterface;

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <ContentWrapper $isHovered={isHovered}>
        <Content>
          <TextWrapper>
            <TextTitle textAlign="center">{title}</TextTitle>
            <TextSubtitle textAlign="center">{description}</TextSubtitle>
          </TextWrapper>

          <ButtonWrapper>
            <Link href={githubLink}>
              <ButtonReverseText
                iconSrc={Github}
                size="small"
                border={theme.color.background}
                color={'transparent'}
                colorHovered={theme.color.background}
                colorText={theme.color.background}
                colorTextHovered={theme.color.text}
                children="GITHUB"
              />
            </Link>
            <Link href={prototypeLink}>
              <ButtonReverseText
                iconSrc={ExternalLink}
                isIconOnRight={true}
                size="small"
                border={theme.color.background}
                borderHovered={theme.color.background}
                color={theme.color.background}
                colorHovered={theme.color.background}
                colorText={theme.color.text}
                colorTextHovered={theme.color.text}
                children="PROTOTYPE"
              />
            </Link>
          </ButtonWrapper>
        </Content>
      </ContentWrapper>
      <TitlePreview $isHovered={isHovered} title={title} subtitle={subtitle} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TitlePreview = styled(ImageTitle)<{ $isHovered: boolean }>`
  opacity: ${({ $isHovered }) => ($isHovered ? 0 : 1)};
  pointer-events: ${({ $isHovered }) => ($isHovered ? 'none' : 'auto')};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;

const ContentWrapper = styled.div<{ $isHovered: boolean }>`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.7);
  transition: ${({ theme }) => `${theme.speed.normal}`};
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  pointer-events: ${({ $isHovered }) => ($isHovered ? 'auto' : 'none')};
`;

const Content = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.color.textNeutral};
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0px;

  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const TextTitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  color: ${({ theme }) => theme.color.background};
`;

const TextSubtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.background};
`;
