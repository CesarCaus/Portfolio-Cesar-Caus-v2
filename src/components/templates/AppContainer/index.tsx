import React from 'react';
import { Container } from './styles';
import { AppContainerProps } from './types';

const AppContainer: React.FC<AppContainerProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default AppContainer;