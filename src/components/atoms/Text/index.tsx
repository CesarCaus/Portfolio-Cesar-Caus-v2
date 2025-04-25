import React from 'react';
import { Container } from './styles';
import { TextProps } from './types';

const Text: React.FC<TextProps> = ({ 
  children, 
  color, 
  size = 16, 
  weight = 'normal', 
  align = 'left',
  width = 100,
  fontFamily,
  spacing,
  ...rest
}) => {
  return (
    <Container 
      color={color} 
      size={size} 
      weight={weight} 
      align={align} 
      {...rest}
      width={width}
      fontFamily={fontFamily}
      spacing={spacing}
    >
      {children}
    </Container>
  );
};

export default Text;
