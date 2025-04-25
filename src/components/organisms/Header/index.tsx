import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../atoms/Icon';
import { lightTheme } from '../../../styles/theme';
import * as S from './styles';
import Text from '../../atoms/Text';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ currentTheme, toggleTheme }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <S.Header>
      <S.Actions>
        <button onClick={toggleTheme}>
          <Icon 
            name={currentTheme === lightTheme ? "FaMoon" : "FaSun"} 
            type="fa"
            size={26}
            color="text"
          />
        </button>
        
          <S.LanguageContainer>
            <Icon name="MdLanguage" type="material" size={28} color="text" />

            <S.LanguageSelect value={i18n.language} onChange={(e) => toggleLanguage(e.target.value)}>
              <option value="en"><Text weight={600}>EN</Text></option>
              <option value="pt"><Text weight={600}>PT</Text></option>
            </S.LanguageSelect>
          </S.LanguageContainer>
        </S.Actions>      
    </S.Header>
  );
};
