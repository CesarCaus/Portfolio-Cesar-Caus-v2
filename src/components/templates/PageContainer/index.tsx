import React from 'react';
import { Container } from './styles';
import { PageContainerProps } from './types';

export const PageContainer: React.FC<PageContainerProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
