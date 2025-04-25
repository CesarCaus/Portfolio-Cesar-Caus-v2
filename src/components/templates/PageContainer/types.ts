import { ReactNode } from 'react';

export interface PageContainerProps {
  children?: ReactNode;
  direction?: "row" | "column";
}