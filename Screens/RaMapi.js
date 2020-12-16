import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';
import { Image, StyleSheet, View, TextInput, ImageBackground, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Text, InputGroup, Input, Icon, Thumbnail, Card, CardItem } from 'native-base';
import axios from 'axios';

export default class RaMapi extends Component {
  constructor(props) {
    super(props);
    this.handlerButtom = this.handlerButtom.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      isReady: false,
      response: [],
      consultoApi: false,
      results: { name: 'Rick' }
    };
  }

  async componentDidMount() {

    this.setState({ isReady: true });
  }


  handlerChange = (text) => {
    console.log(text);
    var nombre = text;
    this.setState({ value: nombre });
  }


  handlerButtom = () => {
    console.log("handleado");

    var nombre = this.state.value;

    axios.get('https://rickandmortyapi.com/api/character/?name=' + nombre)
      .then(response => {
        console.log(response);
        this.setState({ consulteApi: true, results: response.data.results[0] });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }


  render() {

    if (this.state.consulteApi === true) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
              <View style={styles.container}>
                <View style={styles.inner}>
                <ImageBackground source={require('../app/img/RAM.gif')} style={styles.gif}></ImageBackground>
                  <Text>Rick And Morty API</Text>
                
                    <InputGroup borderType="rounded" >
                      <Icon name="md-search" style={{ color: '#384850' }}></Icon>
                      <Input onChangeText={this.handlerChange.bind(this)} style={{ color: '#00c497' }} />
                    </InputGroup>
                    <Button onPress={this.handlerButtom.bind(this)} full info>
                      <Text>Buscar</Text>
                    </Button>                
                      <Image source={{ uri: this.state.results.image }} style={{ height: 500, width: 310, flex: 1 }} />
                      <Text>Nombre: {this.state.results.name}</Text>
                      <Text>Estado: {this.state.results.status}</Text>
                      <Text>Especie: {this.state.results.species}</Text>
                      <Text>Genero: {this.state.results.gender}</Text>
                </View>
              </View>
            </ImageBackground>
          </ScrollView >
        </View >

      );
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
              <View style={styles.container}>
                <View style={styles.inner}>
                <ImageBackground source={require('../app/img/RAM.gif')} style={styles.gif}></ImageBackground>
                  <Text>Rick And Morty API</Text>
         
         
            <InputGroup borderType="rounded" >
              <Icon name="md-search" style={{ color: '#384850' }}></Icon>
              <Input onChangeText={this.handlerChange.bind(this)} style={{ color: '#00c497' }} />
            </InputGroup>
            <Button onPress={this.handlerButtom.bind(this)} full info>
              <Text>Buscar</Text>
            </Button>
            </View>
              </View>
            </ImageBackground>
          </ScrollView >
        </View >

        
      );

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 360,
    height: 560,
  },
  gif: {
        
        
    width: 260,
    height: 200,
},
  inner: {
    width: '80%',
    height: '70%',
    backgroundColor: 'rgba(255,255,255,.6)',

    alignItems: 'center',
    justifyContent: 'center',

  },

});