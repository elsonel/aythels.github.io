import React from 'react';
import styled from 'styled-components';
import { TextFooter, TextFooterProps } from '../../../text/TextFooter';
import { TextLink } from '../../../text/TextLink';

export interface FooterLinkProps extends TextFooterProps {}

export const FooterLink: React.FC<FooterLinkProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <a href="/storybook/index.html" target="_blank" rel="noreferrer">
      <TextLink size={'tiny'} isWrapped={false} {...props}>
        Designed and built from scratch with React.
      </TextLink>
    </a>
  );
};
