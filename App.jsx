import React from 'react';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Introducao from './components/Introducao';
import ProjetoCard from './components/ProjetoCard';



const projetos = [
  {
    titulo: 'Ricky and Morty API',
    descricao: 'Projeto desenvolvido com React, estilizado em Tailwind utilizando a API do Ricky and Morty. Onde era possível buscar personagens, episódios e locais e, também, criar novos personagens e customizar os personagens originais trazidos pela API.',
    imagem: require('./assets/RickMorty.png'), // Substitua './assets/projeto1.jpg' pelo caminho correto da sua imagem
  },
  {

    titulo: 'Elite Chefs',
    descricao: 'Projeto desenvolvido com React, integrando frontend e backend com NodeJS. Onde era possível cadastrar, editar, excluir, listar, editar e avaliar restaurates. Além disso, era possível realizar login e cadastro de usuários.',
    imagem: require('./assets/EliteChefs.png'), // Substitua './assets/projeto2.jpg' pelo caminho correto da sua imagem
  },
  // Adicione mais projetos conforme necessário
];


const App = () => {

  const [verProjetos, setVerProjetos] = useState(false);

  const handlePress = () => {
    Linking.openURL('https://linktr.ee/fabiovsimoes');
  };


  return (
    <View className='bg-rose-200 flex-1'>
      {/* Header */}
      <ScrollView>
        <View className='bg-[#387558]'>
          <Text className='text-3xl text-center mt-8 text-white p-4'>
            Portfólio
          </Text>

        </View>

        {/* Main content */}
        <View className='flex-1 mt-24'>

          <View className='p-4'>
          <Introducao
          nome="Fábio Vilas Boas"
          descricao="Sou Fábio Junior, natural de Sorocaba-SP, e atualmente conto com 16 anos de idade. Encontro-me matriculado no curso de Desenvolvimento de Sistemas no SENAI Valinhos-SP. Sou apaixonado por tecnologia e por tudo que ela pode nos proporcionar, e por isso, estou sempre buscando aprender mais sobre o assunto. Além disso, sou uma pessoa muito comunicativa e gosto de trabalhar em equipe, pois acredito que a troca de conhecimentos é essencial para o crescimento profissional e pessoal de todos."
          descricaoLonga="Atualmente estou cursando o terceiro semenstre do curso de Desenvolvimento de Sistemas no SENAI. Como desenvolvedor, já trabalhei em diversos projetos, começando com HTML e CSS básicos até sistemas que integram frontend e backend. Dos projetos em que trabalhei, os que mais me agradaram em termos de resultado final foram o da API de Rick and Morty, um projeto de conclusão sobre o conteúdo de APIs, e o projeto Elite Chefs, onde eu e minha equipe desenvolvemos um guia gastronômico integrando backend e frontend."
          imagemSrc={require('./assets/fabio.png')} 
        />
            <TouchableOpacity className='bg-[#387558] p-2 rounded-md mt-4' onPress={() => setVerProjetos(!verProjetos)}>
              <Text className='text-white text-center'>Conheça os projetos</Text>
            </TouchableOpacity>

          </View>
          {verProjetos && (
          <View className="p-1 w-full mx-auto rounded-md">
            {projetos.map((projeto, index) => (
              <ProjetoCard
                key={index}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
              />
            ))}
          </View>
        )}
        </View>
        <View className='p-4 flex-row items-center justify-between'>
          <Image
            source={{ uri: 'https://yourdomain.com/logo.png' }}
            className='h-10 w-28'
            resizeMode="contain"
          />
          <TouchableOpacity className='p-2 rounded-md'>
            <Image
              source={{ uri: 'https://yourdomain.com/menu.png' }}
              className='h-8 w-8'
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Main content */}

        {/* Colocar as tecnologias utilizadas com os icones importados do expo vector icons */}
        <View className='flex-1 mt-10 -ml-2 bg-stone-400'>
          <View className='p-4'>
            <Text className='text-2xl font-bold text-gray-800'>
              Tecnologias
            </Text>
            <View className='bg-[#387558] rounded-3xl h-1 w-2/5 mb-8' >
            </View>
            <View className='flex-row items-center justify-between'>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <AntDesign name="HTML" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>HTML</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome name="css3" size={24} color="black" />

                <Text className='text-lg text-gray-600 ml-2'>CSS</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome5 name="js" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>JavaScript</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome6 name="react" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>React</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <FontAwesome5 name="node" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>NodeJS</Text>
              </View>
              <View className='flex flex-col sm:flex-row items-center justify-evenly'>
                <MaterialCommunityIcons name="tailwind" size={24} color="black" />
                <Text className='text-lg text-gray-600 ml-2'>Tailwind</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Main content */}




      </ScrollView>

      {/* Footer */}
      <TouchableOpacity onPress={handlePress}>
      <View className='p-4 bg-[#387558]'>
        <Text className='text-base text-gray-100 mx-auto'>
          Insta &bull; GitHub &bull; WhatsApp
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;