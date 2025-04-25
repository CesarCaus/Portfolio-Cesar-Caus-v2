import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  width?: number;
  color?: string;
  size?: number;
  weight?: string | number;
  align?: 'left' | 'center' | 'right' | 'justify';
  [key: string]: any;
  fontFamily?: 'default' | 'signature' | 'name' | 'code';
  spacing?: number;
}
