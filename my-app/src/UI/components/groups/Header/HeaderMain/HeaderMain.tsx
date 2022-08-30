import { LessThanHook } from '../../../../utility/hooks/ResponsiveProps';
import { HeaderBrowser, HeaderTab } from '../HeaderBrowser';
import { HeaderMobile } from '../HeaderMobile';

export interface HeaderMainProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: HeaderTab[];
  tabLogo: HeaderTab;
}

export const HeaderMain: React.FC<HeaderMainProps> = ({
  tabs,
  tabLogo,
  ...props
}: HeaderMainProps) => {
  const isMobile = LessThanHook(600);

  return (
    <div {...props}>
      {isMobile ? (
        <HeaderMobile tabs={tabs} tabLogo={tabLogo} />
      ) : (
        <HeaderBrowser tabs={tabs} tabLogo={tabLogo} />
      )}
    </div>
  );
};
