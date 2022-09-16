import React, { useEffect } from 'react';
import { Page } from '../components/Page';
import { Layout } from '../components/Layout';
import useGoTo from '../utility/useGoTo';

export interface TestProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Test: React.FC<TestProps> = ({ ...props }): React.ReactElement => {
  const goTo = useGoTo();

  return (
    <Page {...props}>
      <Layout>
        Test
        <button onClick={() => goTo('www.google.ca')}>click</button>
      </Layout>
    </Page>
  );
};
