import React from 'react';
import {
  View, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  Text,
  Pressable,
  Linking
} from 'react-native';


const colorGitHub = '#010409';
const colorFont = '#c9d1d9';
const colorDark = '#4f565e'
const imageProfile = 'https://img.freepik.com/fotos-gratis/foto-da-cintura-para-cima-de-uma-mulher-tenra-feminina-e-gentil-com-penteado-encaracolado-penteado-para-o-lado-direito-inclinando-a-cabeca-e-sorrindo-sedutor-tornando-o-olhar-romantico-para-a-camera-se-abracando-sobre-o-fundo-amarelo_1258-81987.jpg?w=2000'

const urlGitHub = 'https://github.com/BrunaCarolinee'


const App = () => {

  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(urlGitHub);
    if(res){
      await Linking.openURL(urlGitHub)
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle = "light-content"/>
      <View style={style.content}>
        <Image 
           accessibilityLabel='pequena sereia'
           style={style.avatar} 
           source={{uri: imageProfile}}
        />
        <Text 
        accessibilityLabel='Alanna Sila' 
        style={[style.defaultText, style.name]}>Alanna Silva
        </Text>

        <Text 
        accessibilityLabel='Nickname Alanninha'  
        style={[style.defaultText, style.nickName]}>Alanninha
        </Text>

        <Text
         accessibilityLabel='Descrição'  
         style={[style.defaultText, style.description]}>Alanna é uma menininha linda maravilhosa baguceira da mamãe. Eu amo muito ela, ela é o meu amor ela é a minha vida.
         </Text>
        
        <Pressable onPress={handlePressGoToGitHub}>
            <View style={style.buttom}>
                <Text style={[style.defaultText, style.buttomText]}>Open in GitHub</Text>
            </View>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //expandir para tela inteira
    justifyContent: 'center',
  },

  content:{
    alignItems: 'center',
    padding: 30,
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth:2,
  },

  defaultText: {
    color: colorFont,
  },

  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },

  nickName: {
    color: colorDark,
    fontSize: 20,
  },

  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  buttom: {
    marginTop:20,
    backgroundColor:colorDark,
    borderRadius: 10,
    padding: 20,

  },

  buttomText:{
    fontWeight: 'bold',
    fontSize: 16,
  }
  
});