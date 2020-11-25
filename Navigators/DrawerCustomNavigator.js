
import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import { HomeScreen } from "../Screens/HomeScreen";
import { APIScreen } from "../Screens/APIScreen";
import { APIinfo } from "../Screens/APIinfo";
import { LoginScreen } from "../Screens/LoginScreen";
import { DrawerContentScreen } from "../Screens/DrawerContentScreen";
console.log(HomeScreen, APIScreen, APIinfo,);

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
                <Drawer.Screen name="APIinfo" component={APIinfo} />


            </Drawer.Navigator>
        );
    }

}

