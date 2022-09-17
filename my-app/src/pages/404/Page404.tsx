import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';

export interface Page404Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Page404: React.FC<Page404Props> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="404" {...props}>
      <Layout>404 Error Page</Layout>
    </Page>
  );
};
