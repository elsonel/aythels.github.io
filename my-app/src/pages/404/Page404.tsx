import React from 'react';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { ErrorPanel } from '../../UI/components/atoms/ErrorPanel/ErrorPanel';
import useGoTo from '../../utility/useGoTo';

export interface Page404Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Page404: React.FC<Page404Props> = ({
  ...props
}): React.ReactElement => {
  let goTo = useGoTo();

  return (
    <Page title="404" {...props}>
      <Layout>
        <ErrorPanel
          homeLink="/"
          onHomeClick={() => goTo('/')}
          email="elsonliangel@gmail.com"
        />
      </Layout>
    </Page>
  );
};
