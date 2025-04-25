import styled from 'styled-components';
import { BoxEffectProps, MyImageProps } from './types';

export const Container = styled.div`
  width: ${({ theme }) => theme.metrics.px(450)}px;
  height: ${({ theme }) => theme.metrics.px(450)}px;
`;

export const BoxImage= styled.div<MyImageProps>`
  width: ${({ theme }) => theme.metrics.px(350)}px;
  height: ${({ theme }) => theme.metrics.px(350)}px;
  position: absolute;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid white;

  img {
    width: ${({ theme }) => theme.metrics.px(350)}px;
    height: ${({ theme }) => theme.metrics.px(350)}px;
    border-radius: 10px;
  }
`

export const BoxEffect = styled.div<BoxEffectProps>`
  width: ${({ theme }) => theme.metrics.px(350)}px;
  height: ${({ theme }) => theme.metrics.px(350)}px;
  background-color: white;
  filter: blur(${({ blur })=> blur}px);
  margin-top: ${({ theme, mt })=> theme.metrics.px(mt)}px;
  margin-left: ${({ theme, ml })=> theme.metrics.px(ml)}px;
  position: absolute;
  border-radius: 10px;
  box-shadow: 1px 2px 20px black;
  opacity: ${({ opacity}) => opacity};
`