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
                            icon={() => <Icon type="material-community" name="all-inclusive" style={styles.icon} />}
                            label="API"
                            onPress={() => this.props.navigation.navigate("API")}
                        />
                        <DrawerItem
                            icon={() => <Icon type="material-community" name="account" style={styles.icon} />}
                            label="APIinfo"
                            onPress={() => this.props.navigation.navigate("APIinfo")}
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
        backgroundColor: '#49CBEE',
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