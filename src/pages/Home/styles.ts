import styled, { keyframes } from 'styled-components';
import { ButtonProps, TextContainerProps, TypingTextProps } from './types';

export const HomeSection = styled.section`

`;

export const ArcBackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    filter: blur(70px);
`;

export const ArcBackground = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #a259ff,rgb(91, 0, 209));
    opacity: 0.8;

    clip-path: polygon(
    0%   10%,   5%  35.7%,  10%  40.8%,  15%  45.3%,
    20%  49.2%, 25%  52.5%,  30%  55.2%,  35%  57.3%,
    40%  58.8%, 45%  59.7%,  50%  60%,
    55%  59.7%, 60%  58.8%, 65%  57.3%, 70%  55.2%,
    75%  52.5%, 80%  49.2%, 85%  45.3%, 90%  40.8%,
    95%  35.7%, 100% 10%,
    100% 90%, 0% 90%
    );
`;

export const ArcFill = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(135deg, #a259ff, #5b00d1);
`

export const LeftContainer = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;

    
    @media (max-width: 800px) {
        width: 100%;
    }
`

export const TextContainer = styled.div<TextContainerProps>`
    width: fit-content;
    margin-top: ${({ mt, theme}) => theme.metrics.px(mt)}px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    gap: 20px;
`

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

export const TypingText = styled.span<TypingTextProps>`
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid ${({ theme }) => theme.colors.primary || '#5b00d1'};
  white-space: nowrap;
  animation: 
    ${typing} 1s steps(${({ lenght }) => lenght}, end),
    ${blink} 0.7s step-end infinite;
`;

export const StyledButton = styled.button<ButtonProps>`
    width:  ${({ theme }) => theme.metrics.px(150)}px;
    height:  ${({ theme }) => theme.metrics.px(40)}px;
    background-color: ${({ theme, color }) => theme.colors[color as keyof typeof theme.colors] || color};
    border: none;
    border-radius: ${({ theme }) => theme.metrics.borderRadius.md};
    outline: none;
    cursor: pointer;
`

export const RightContainer = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 10;

    @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    order: -1;
  }
`
