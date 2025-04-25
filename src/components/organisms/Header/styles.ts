// src/components/organisms/Header/style.ts
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: ${({ theme }) => theme.metrics.px(50)}px;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  left: 20px;
  top: 12px;

  button {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    transition: 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const LanguageSelect = styled.select`
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};  
  
  &:focus {
    outline: none; 
  }

  option {
    background-color: ${({ theme }) => theme.colors.background};  
    color: ${({ theme }) => theme.colors.text};  
  }
`;

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
`
