// components/ProjetoCard.jsx

import React from 'react';
import { View, Text, Image } from 'react-native';

const ProjetoCard = ({ titulo, descricao, imagem }) => {
  return (
    <View className="p-2 bg-[#9BAF8E] mt-12 w-96 mx-auto rounded-lg shadow-md">
      <Image
        source={imagem}
        className="w-full h-56 rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-xl font-bold mt-4 mb-4">{titulo}</Text>
      <Text className="text-lg mt-1 text-justify">{descricao}</Text>
    </View>
  );
};

export default ProjetoCard;
