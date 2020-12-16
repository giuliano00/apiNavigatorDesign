import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerDefaultNavigator } from './Navigators/DrawerDefaultNavigator';
import { DrawerCustomNavigator } from './Navigators/DrawerCustomNavigator.js';
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import APIScreen  from "./Screens/APIScreen";

import RaMapi  from "./Screens/RaMapi";
import Cat  from "./Screens/Cat";
import Swapi  from "./Screens/Swapi";
import superheroapi  from "./Screens/superheroapi";
import breakingbadapi  from "./Screens/breakingbadapi";
import openbrewerydb  from "./Screens/openbrewerydb";
import Dolar  from "./Screens/Dolar";
import chucknorris  from "./Screens/chucknorris";
import pokeapi  from "./Screens/pokeapi";
import amiiboapi  from "./Screens/amiiboapi"

import sonido  from "./Screens/sonido"

const Drawer = createDrawerNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false }
  }

  setLogin() {
    this.setState({ isLoggedIn: true });
  }

  setLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    let screen;
    if (!this.state.isLoggedIn) {

      screen = <LoginScreen onLogin={() => this.setLogin()} />



    } else {
      screen =
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            headerMode={'none'}
            drawerContent={props => <DrawerContentScreen {...props} onLogout={() => this.setLogout()} />}
          >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="API" component={APIScreen} />

            <Drawer.Screen name="RaMapi" component={RaMapi} />
            <Drawer.Screen name="Cat" component={Cat} />
            <Drawer.Screen name="Swapi" component={Swapi} />
            <Drawer.Screen name="superheroapi" component={superheroapi} />
            <Drawer.Screen name="breakingbadapi" component={breakingbadapi} />
            <Drawer.Screen name="openbrewerydb" component={openbrewerydb} />
            <Drawer.Screen name="Dolar" component={Dolar} />
            <Drawer.Screen name="amiiboapi" component={amiiboapi} />
            <Drawer.Screen name="chucknorris" component={chucknorris} />
            <Drawer.Screen name="pokeapi" component={pokeapi} />

            <Drawer.Screen name="sonido" component={sonido} />

          </Drawer.Navigator>
        </NavigationContainer>


    }
    return screen;

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//     bp-DrawerNavigator-RN-main