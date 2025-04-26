import styled from 'styled-components';
import { TextContainerProps } from './types';

export const AboutSection = styled.section`
    
`;

export const Row= styled.div`
  width: calc(100% - ${({ theme }) => theme.metrics.px(100)}px);
  padding: ${({ theme }) => theme.metrics.px(50)};
  height: 50%;
`
export const TextContainer = styled.div<TextContainerProps>`
    width: fit-content;
    margin-top: ${({ mt, theme}) => theme.metrics.px(mt ?? 0)}px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    gap: 20px;
`

