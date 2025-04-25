import styled from 'styled-components';
import { TextProps } from './types';

export const Container = styled.span<TextProps>`
  width: ${({ width }) => width}%;
  color: ${({ color, theme }) => color || theme.colors.text};
  font-size: ${({ size, theme }) => theme.metrics.px(size)}px;
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  font-family: ${({ fontFamily = 'default', theme }) => theme.fonts.family[fontFamily]};
  letter-spacing: ${({ spacing }) => spacing}px;
`;
