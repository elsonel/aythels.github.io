import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { Paragraph } from '../../text/Paragraph';
import { TextTitle } from '../../text/TextTitle';

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Typography: React.FC<TypographyProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <div>
        <TextTitle size="small">Typeface</TextTitle>
        <br />
        <Paragraph weight="bold2">
          The font used is {Theme.font.family}
        </Paragraph>
        <br />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          lobortis quam nec mauris vehicula ultricies. In tempus velit vel sem
          porttitor tincidunt. Curabitur et mauris id dui condimentum cursus.
          Etiam id hendrerit mauris, et commodo lorem. Mauris iaculis orci nisi.
          Proin efficitur, ex sit amet efficitur tristique, elit ante tempor
          enim, sit amet finibus tellus tortor at metus. Nullam malesuada turpis
          ac risus consectetur dignissim. Proin orci ligula, lacinia in ultrices
          vel, aliquam non lectus.
        </Paragraph>
        <br />
        <Paragraph>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Paragraph>
        <Paragraph>abcdefghijklmnopqrstuvwxyz</Paragraph>
        <Paragraph>1234567890 !@£$% &*()+ -–—“” ‘’?/</Paragraph>
        <br />
      </div>
      <br />
      <div>
        <TextTitle size="small">Weight</TextTitle>
        <br />
        <Grid>
          {Object.keys(Theme.font.weight).map((e: string) => (
            <GridEntry>
              <Paragraph weight={e}>HELLO Hello</Paragraph>
              <br />
              <TextLight>{e}</TextLight>
            </GridEntry>
          ))}
        </Grid>
        <br />
      </div>
      <br />
      <div>
        <TextTitle size="small">Size</TextTitle>
        <br />
        <Grid>
          {Object.keys(Theme.font.size).map((e: string) => (
            <GridEntry>
              <Paragraph size={e}>Aa</Paragraph>
              <br />
              <TextLight>{e}</TextLight>
            </GridEntry>
          ))}
        </Grid>
        <br />
      </div>
      <br />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const GridEntry = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 120px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

const TextLight = styled(Paragraph)`
  color: ${({ theme }) => theme.color.textPassive2};
`;
