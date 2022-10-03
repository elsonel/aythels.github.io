import React from 'react';
import styled from 'styled-components';
import { RowIconText } from '../../layout/RowIconText';
import { TextButton } from '../../text/TextButton';
import { IIconImage } from '../IIconImage';
import { IIconSVG } from '../IIconSVG';

function getIcon(
  icon:
    | string
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>
) {
  if (typeof icon === 'string') return <IIconImage size={16} src={icon} />;

  return <IIconSVG size={16} src={icon} />;
}

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  icon:
    | string
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  label: string;
}

export const Chip: React.FC<ChipProps> = ({
  icon,
  label,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <RowIconText gap={6} icon={getIcon(icon)}>
        <TextButton size="tiny" isWrapped={false}>
          {label}
        </TextButton>
      </RowIconText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  vertical-align: top;

  height: 24px;
  padding: 0px 8px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.outline};
`;
