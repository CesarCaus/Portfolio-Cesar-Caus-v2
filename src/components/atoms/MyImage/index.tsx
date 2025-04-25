import React from 'react';
import { MyImageProps } from './types';
import * as S from './styles';

export const MyImage: React.FC<MyImageProps> = ({ }) => {
  return  ( 
    <S.Container>
      <S.BoxEffect blur={4} mt={100} ml={100} opacity={0.5}/>
      <S.BoxEffect blur={3} mt={60} ml={60} opacity={0.9}/>
      <S.BoxImage>
        <img src='/public/image.png' alt="Imagem" />
      </S.BoxImage>
    </S.Container> );
};
