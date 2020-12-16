
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
import { pokeapi } from "../Screens/pokeapi";
import { Dolar } from "../Screens/Dolar";
import { chucknorris } from "../Screens/chucknorris";

import { sonido } from "../Screens/sonido";

//import { LoginScreen } from "../Screens/LoginScreen";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="API" component={APIScreen} />

                <Drawer.Screen name="RaMapi" component={RaMapi} />
                <Drawer.Screen name="Cat" component={Cat} />
                <Drawer.Screen name="Swapi" component={Swapi} />
                <Drawer.Screen name="superheroapi" component={superheroapi} />
                <Drawer.Screen name="breakingbadapi" component={breakingbadapi} />
                <Drawer.Screen name="openbrewerydb" component={openbrewerydb} />
                <Drawer.Screen name="amiiboapi" component={amiiboapi} />
                <Drawer.Screen name="pokeapi" component={pokeapi} />
                <Drawer.Screen name="Dolar" component={Dolar} />
                <Drawer.Screen name="chucknorris" component={chucknorris} />

                <Drawer.Screen name="sonido" component={sonido} />

            </Drawer.Navigator>
        );
    }

}