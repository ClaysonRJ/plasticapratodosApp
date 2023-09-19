import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import {addCircle} from './img/ionicons.designerpack/index.mjs';
import Icon from 'react-native-ionicons'


const App = () => (
  <View style={styles.container}>
    
    <Icon name="addCircle" ios="ios-add" android="md-add" />
    <Image
      source={require('./Img/LOGO.png')}
      style={styles.imagem}
    />
    <Button
      title="ENTRAR"
      buttonStyle={{
        backgroundColor: '#E41B9E',
        borderWidth: 2,
        borderColor: '#E41B9E',
        borderRadius: 30,
      }}
      containerStyle={{
        width: '100%',
        height: '22%',
        marginHorizontal: 20,
        marginVertical: 10,
      }}
      titleStyle={{ fontWeight: 'bold', fontSize:30 }}
    />
    
    <Text>Created by: Clayson Julião</Text>

  </View>

);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'

  },
  imagem: {
    width: '100%',
    height: '22%',
    
  },

  /*
  <Text style={styles.title}>React Native</Text>
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },*/

});


export default App;
