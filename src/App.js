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
const imageProfile = 'https://i1.wp.com/www.aquinoticias.com/wp-content/uploads/2020/09/Materia-04.jpg?fit=600%2C400&ssl=1'

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
        style={[style.defaultText, style.name]}>Gato Feliz
        </Text>

        <Text 
        accessibilityLabel='Nickname Alanninha'  
        style={[style.defaultText, style.nickName]}>Gatinho
        </Text>

        <Text
         accessibilityLabel='Descrição'  
         style={[style.defaultText, style.description]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum iaculis nisl, eu  Quisque suscipit eget enim quis pharetra. Mauris efficitur tincidunt dignissim. Quisque rutrum dui feugiat fermentum luctus..
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
