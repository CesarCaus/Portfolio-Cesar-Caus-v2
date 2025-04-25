import styled from 'styled-components';
import { PageContainerProps } from './types';

export const Container = styled.div<PageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.metrics.px(70)}px);
  padding-top: ${({ theme }) => theme.metrics.px(70)}px;
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;