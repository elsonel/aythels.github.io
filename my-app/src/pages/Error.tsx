import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Error: React.FC<ErrorProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page>
      <Layout>404 Error Page</Layout>
    </Page>
  );
};
