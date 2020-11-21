import React, { Component } from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'

export class DrawerContentScreen extends Component {

    handlerConfiguration() {
        console.log("Configuration");
    }

    handlerLogout() {
        console.log("Logout");
    }

    render() {

        return (
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icon} />}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                        <DrawerItem
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon} />}
                            label="API"
                            onPress={() => this.props.navigation.navigate("API")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>
                    <DrawerItem
                        icon={() => <Icon type="material-community" name="cogs" style={styles.icon} />}
                        label="Configuration"
                        onPress={() => this.handlerConfiguration()}
                    />
                    <DrawerItem
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon} />}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1D1D1',
    },
    icon: {
        color: '#517fa4'
    },
    topDrawer: {
        //backgroundColor: '#FFFFFF',
        flex: 1
    },
    bottomDrawer: {
        flex: -1,
        justifyContent: 'flex-end',
        marginBottom: 5,
        borderTopColor: '#6C7472',
        borderTopWidth: 3,
        //backgroundColor: '#FFFFFF',
    }
});