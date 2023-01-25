import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
import {
  FontInterface,
  ThemeFontInterface,
} from '../../../utility/themes/ThemeFont';
import { ButtonText } from '../../inputs/ButtonText';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export type ITypographyOverviewProps = React.HTMLAttributes<HTMLDivElement>;

// The contents of this component are generated automatically based on the current theme object
export const TypographyOverview: React.FC<ITypographyOverviewProps> = ({
  ...props
}): React.ReactElement => {
  const { font } = useTheme() as ThemeInterface;
  const [fontObj, setFontObj] = useState(font.default);

  return (
    <>
      <TabWrapper>
        {Object.keys(font).map((e) => (
          <ButtonText
            onClick={() => setFontObj(font[e as keyof typeof font])}
            color={'black'}
          >
            {e.toUpperCase()}
          </ButtonText>
        ))}
      </TabWrapper>
      <Wrapper>
        <Section>
          <Paragraph size="h1" weight="bold" font={fontObj}>
            Typeface
          </Paragraph>
          <Paragraph weight="bold" font={fontObj}>
            The font is {fontObj.family}
          </Paragraph>
          <Paragraph font={fontObj}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis quam nec mauris vehicula ultricies. In tempus velit vel sem
            porttitor tincidunt. Curabitur et mauris id dui condimentum cursus.
            Etiam id hendrerit mauris, et commodo lorem. Mauris iaculis orci
            nisi. Proin efficitur, ex sit amet efficitur tristique, elit ante
            tempor enim, sit amet finibus tellus tortor at metus. Nullam
            malesuada turpis ac risus consectetur dignissim. Proin orci ligula,
            lacinia in ultrices vel, aliquam non lectus.
          </Paragraph>
          <div>
            <Paragraph font={fontObj}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Paragraph>
            <Paragraph font={fontObj}>abcdefghijklmnopqrstuvwxyz</Paragraph>
            <Paragraph font={fontObj}>
              1234567890 !@£$% &*()+ -–—“” ‘’?/
            </Paragraph>
          </div>
        </Section>
        <Section>
          <Paragraph size="h3" weight="bold" font={fontObj}>
            Weight
          </Paragraph>
          <Grid>
            {Object.keys(fontObj.weight).map((e) => (
              <Card key={e}>
                <Paragraph
                  weight={e as keyof FontInterface['weight']}
                  font={fontObj}
                >
                  HELLO Hello
                </Paragraph>
                <br />
                <Paragraph font={fontObj} color="grey">
                  <i>{e}</i>
                </Paragraph>
              </Card>
            ))}
          </Grid>
        </Section>
        <Section>
          <Paragraph size="h3" weight="bold" font={fontObj}>
            Size
          </Paragraph>
          <Grid>
            {Object.keys(fontObj.size).map((e) => (
              <Card key={e}>
                <Paragraph
                  size={e as keyof FontInterface['size']}
                  font={fontObj}
                >
                  Aa
                </Paragraph>
                <br />
                <Paragraph font={fontObj} color="grey">
                  <i>{e}</i>
                </Paragraph>
              </Card>
            ))}
          </Grid>
        </Section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TabWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  width: 120px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;
