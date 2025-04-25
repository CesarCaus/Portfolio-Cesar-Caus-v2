import React from 'react';
import * as S from './styles';
import { AboutProps } from './types';
import { PageContainer } from '../../components/templates/PageContainer';
import Text from '../../components/atoms/Text';
import { useTranslation } from 'react-i18next';

export const About: React.FC<AboutProps> = () => {

  const { t } = useTranslation();

  return (
    <S.AboutSection id="about">
        <PageContainer direction='column'>
            <S.Row>
              <S.TextContainer>
                <Text size={50}>{t('titles.about')}</Text>
              </S.TextContainer>
              <S.TextContainer>
               
              </S.TextContainer>
            </S.Row>
            <S.Row>
              
            </S.Row>
        </PageContainer>
    </S.AboutSection>
  );
};

