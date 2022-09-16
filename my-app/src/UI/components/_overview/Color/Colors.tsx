import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { ColorInterface } from '../../../utility/themes/ThemeColor';
import { Paragraph } from '../../text/Paragraph';
import { TextTitle } from '../../text/TextTitle';

export interface ColorsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Colors: React.FC<ColorsProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <div>
        <TextTitle size="small">Colors</TextTitle>
        <br />
        <Grid>
          {Object.keys(Theme.color).map((key, i) => (
            <GridEntry key={i}>
              <GridEntryColor
                $color={Theme.color[key as keyof ColorInterface]}
              />
              <GridEntryText>
                <TextColor isWrapped={false}>{key}</TextColor>
                <br />
                <TextHex isWrapped={false}>
                  {Theme.color[key as keyof ColorInterface]}
                </TextHex>
              </GridEntryText>
            </GridEntry>
          ))}
        </Grid>
        <br />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GridEntry = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;

  display: flex;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

const GridEntryColor = styled.div<{ $color: string }>`
  width: 50%;

  background-color: ${({ $color }) => $color};
`;

const GridEntryText = styled.div`
  box-sizing: border-box;

  width: 50%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextColor = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;

const TextHex = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
