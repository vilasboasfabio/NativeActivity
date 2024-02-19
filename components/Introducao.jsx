// Introducao.jsx

import React from 'react';
import { Text, View, Image } from 'react-native';

const Introducao = ({ nome, descricao, descricaoLonga, imagemSrc }) => {
  return (
    <View className='p-4'>
      <Image
        source={imagemSrc}
        className='w-96 rounded-lg mb-8 -ml-4 h-96'
        resizeMode="cover"
      />
      <Text className='text-2xl font-bold text-gray-800'>
        {nome}
      </Text>
      <View className='bg-[#387558] rounded-3xl h-1 w-1/2 mb-8' />
      <Text className='text-justify text-lg text-gray-600 mt-1'>
        {descricao}
      </Text>
      <Text className='text-base text-justify text-gray-600 mt-4'>
        {descricaoLonga}
      </Text>
    </View>
  );
};

export default Introducao;
