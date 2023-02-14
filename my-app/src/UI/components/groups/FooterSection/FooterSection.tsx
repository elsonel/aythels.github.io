import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan, LessThan } from '../../../utility/styles/ResponsiveCSS';
import { FadeInParagraph } from '../../text/FadeInParagraph/FadeInParagraph';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Background } from './Background/Background';

export interface FooterSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  isLoaded = true,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  const sharedTextProps = {
    backgroundColor: color.backgroundOpposite,
    middleColor: color.primary,
    color: color.background,
    isLoaded: isLoaded,
    isWrapped: false,
  };

  return (
    <>
      <Wrapper {...props}>
        <TextWrapper>
          <SubTitle {...sharedTextProps}>That's all for now...</SubTitle>
          <Title {...sharedTextProps}>LET'S CONNECT</Title>
        </TextWrapper>
        <ContactWrapper>
          <Fact>
            <FactLabel {...sharedTextProps} delay={100}>
              MEDIA
            </FactLabel>
            <div>
              <FactText {...sharedTextProps} delay={100}>
                GITHUB
              </FactText>
              <FactText {...sharedTextProps} delay={100}>
                LINKEDIN
              </FactText>
            </div>
          </Fact>
          <Fact>
            <FactLabel {...sharedTextProps} delay={100}>
              EMAIL
            </FactLabel>
            <div>
              <FactText {...sharedTextProps} delay={100}>
                ELSONLIANG@GMAIL.COM
              </FactText>
            </div>
          </Fact>
        </ContactWrapper>
        <ContainerBottom
          {...sharedTextProps}
          color={color.backgroundOppositeHighlight}
          delay={200}
        >
          This website was designed and built from scratch with React.
        </ContainerBottom>
      </Wrapper>
      <Background />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;

const TextWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  ${GreaterThan(0, `padding: 20px; padding-top: 24px;`)}
  ${GreaterThan(600, ` padding: 40px; padding-top: 50px;`)}
  ${GreaterThan(1000, ` padding: 60px; padding-top: 74px;`)}
`;

const SubTitle = styled(FadeInParagraph)`
  font-size: ${({ theme }) => theme.font.default.size.large};

  line-height: 1.4;
`;

const Title = styled(FadeInParagraph)`
  ${GreaterThan(0, `font-size: 2rem;`)}
  ${GreaterThan(450, `font-size: 3rem;`)}
  ${GreaterThan(600, `font-size: 4rem;`)}
  ${GreaterThan(700, `font-size: 5rem;`)}
  ${GreaterThan(1000, `font-size: 7rem;`)}
  ${GreaterThan(1400, `font-size: 10rem;`)}

  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 1;
`;

const ContactWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  column-gap: 200px;
  row-gap: 40px;

  ${GreaterThan(0, `padding: 20px; flex-direction: column;`)}
  ${GreaterThan(600, ` padding: 44px; flex-direction: column;`)}
  ${GreaterThan(900, ` padding: 44px; flex-direction: row; `)}
  ${GreaterThan(1000, ` padding: 64px; flex-direction: row; `)}

  border-bottom: 1px solid
    ${({ theme }) => theme.color.backgroundOppositeHighlight};
`;

const Fact = styled.div`
  display: flex;
  column-gap: 60px;
  ${LessThan(900, `flex-direction: column;`)}
`;

const FactLabel = styled(FadeInParagraph)`
  font-size: ${({ theme }) => theme.font.default.size.small};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  margin-bottom: 10px;
`;

const FactText = styled(FadeInParagraph)`
  font-size: ${({ theme }) => theme.font.default.size.large};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  margin-bottom: 2px;
`;

const ContainerBottom = styled(FadeInParagraph)`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  padding: 20px;
  text-align: center;
`;
