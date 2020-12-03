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
import APIinfo  from "./Screens/APIinfo";
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
            <Drawer.Screen name="APIinfo" component={APIinfo} />
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