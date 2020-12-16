
import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import { HomeScreen } from "../Screens/HomeScreen";
import { APIScreen } from "../Screens/APIScreen";

import { RaMapi } from "../Screens/RaMapi";
import { Cat } from "../Screens/Cat";
import { Swapi } from "../Screens/Swapi";
import { superheroapi } from "../Screens/superheroapi";
import { breakingbadapi } from "../Screens/breakingbadapi";
import { openbrewerydb } from "../Screens/openbrewerydb";
import { amiiboapi } from "../Screens/amiiboapi";
import { chucknorris } from "../Screens/chucknorris";
import { pokeapi } from "../Screens/pokeapi";
import { Dolar } from "../Screens/Dolar";

import { LoginScreen } from "../Screens/LoginScreen";
import { DrawerContentScreen } from "../Screens/DrawerContentScreen";
console.log(HomeScreen, APIScreen, RaMapi, Cat,Swapi,superheroapi,breakingbadapi,openbrewerydb,amiiboapi,chucknorris,pokeapi,Dolar);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="API" component={APIScreen} />

                <Drawer.Screen name="RaMapi" component={RaMapi} />
                <Drawer.Screen name="Cat" component={Cat} />
                <Drawer.Screen name="Swapi" component={Swapi} />
                <Drawer.Screen name="superheroapi" component={superheroapi} />
                <Drawer.Screen name="breakingbadapi" component={breakingbadapi} />
                <Drawer.Screen name="openbrewerydb" component={openbrewerydb} />
                <Drawer.Screen name="amiiboapi" component={amiiboapi} />
                <Drawer.Screen name="Dolar" component={Dolar} />
                <Drawer.Screen name="chucknorris" component={chucknorris} />
                <Drawer.Screen name="pokeapi" component={pokeapi} />
            </Drawer.Navigator>
        );
    }

}

