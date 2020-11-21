
import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import { HomeScreen } from "../Screens/HomeScreen";
import { APIScreen } from "../Screens/APIScreen";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="API" component={APIScreen} />
            </Drawer.Navigator>
        );
    }

}