import React from 'react';
import styled, { useTheme } from 'styled-components';
import { PageTitle } from 'UI/components/atoms/PageTitle';
import { ThemeInterface } from 'UI/utility/themes/Theme';

export interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  subtitle?: string;
}

export const Title: React.FC<PageTitleProps> = ({
  children,
  subtitle,
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <StyledPageTitle
      textAlign="center"
      subtitle={subtitle}
      title={children}
      {...props}
    />
  );
};

const StyledPageTitle = styled(PageTitle)`
  box-sizing: border-box;
  width: 100%;
  padding: 50px 20px 42px 20px;
`;
