import { DefaultTheme } from "styled-components/dist/types";

export interface HomeProps {
  
  }


  export interface BoxProps {
    size: number;
    color: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }

  export interface TextContainerProps {
    mt?: number;
  }

  export interface TypingTextProps {
    lenght?: number;
  }

  export interface ButtonProps {
    color?: keyof DefaultTheme["colors"] | string;
  }