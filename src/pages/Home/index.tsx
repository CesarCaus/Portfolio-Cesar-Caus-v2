import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { HomeProps } from './types';
import { PageContainer } from '../../components/templates/PageContainer';
import { MyImage } from '../../components/atoms/MyImage';
import Text from '../../components/atoms/Text';
import { useTranslation } from 'react-i18next';

export const Home: React.FC<HomeProps> = () => {

  const texts = ['Mobile', 'Web Systems', 'Landing Pages'];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  }, 3000); 

  return () => clearInterval(interval);
}, []);

  const { t } = useTranslation();

  return (
    <S.HomeSection id="home">
        <PageContainer direction='row'> 
            <S.ArcBackgroundContainer>
                <S.ArcBackground />
                <S.ArcFill />
            </S.ArcBackgroundContainer>
            <S.LeftContainer>
              <S.TextContainer>
                <Text size={80} align='left' fontFamily='name' weight={500}>César</Text> 
                <Text size={110} align='left' color='#5b00d1' fontFamily='signature' weight={900}>Caus</Text>
              </S.TextContainer>
              <S.TextContainer>
                <Text size={25}>{t('titles.position')}</Text>
              </S.TextContainer>
              <S.TextContainer mt={50}>
                <S.TypingText key={texts[currentIndex]} lenght={texts[currentIndex].length}>
                  <Text size={40} fontFamily="code">
                    {texts[currentIndex]}
                  </Text>
                </S.TypingText>
              </S.TextContainer>
              <S.TextContainer mt={50}>
                <a href='#projects'>
                  <S.StyledButton color='primary'>
                    <Text size={16} color='#fff'>{t('buttons.projects')}</Text>
                  </S.StyledButton>
                </a>
                <a href='#contact'>
                  <S.StyledButton>
                    <Text size={16} color='text'>{t('buttons.contact')}</Text>
                  </S.StyledButton>
                </a>
              </S.TextContainer>
            </S.LeftContainer>
            <S.RightContainer>
                <MyImage /> 
            </S.RightContainer>
        </PageContainer>
    </S.HomeSection>
  );
};

