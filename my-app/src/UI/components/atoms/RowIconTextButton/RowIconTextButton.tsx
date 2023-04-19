import { IconSVGType } from '../../../utilities/themes/ThemeAsset';
import { RowIconText, RowIconTextProps } from '../../layout/RowIconText';
import { TextButton } from '../../text/TextButton';
import { IIconSVG } from '../IIconSVG';

export interface RowIconTextButtonProps extends RowIconTextProps {
  text?: string;
  iconSrc?: IconSVGType;
  color?: string;
  size?: 'default' | 'small';
}

export const RowIconTextButton: React.FC<RowIconTextButtonProps> = ({
  text,
  iconSrc,
  color = 'black',
  size = 'default',
  ...props
}): React.ReactElement => {
  const icon = iconSrc ? (
    <IIconSVG color={color} size={size === 'default' ? 20 : 16} src={iconSrc} />
  ) : undefined;

  return (
    <RowIconText gap={size === 'default' ? 8 : 6} icon={icon} {...props}>
      <TextButton color={color} isWrapped={false} size={size}>
        {text}
      </TextButton>
    </RowIconText>
  );
};
