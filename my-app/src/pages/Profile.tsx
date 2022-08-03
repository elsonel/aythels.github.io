import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Profile: React.FC<ProfileProps> = ({
  ...props
}): React.ReactElement => {
  let { username } = useParams();

  return <div>Profile Page of {username}</div>;
};
