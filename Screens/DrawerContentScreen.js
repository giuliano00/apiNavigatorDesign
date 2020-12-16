import React, { Component } from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet, ImageBackground, Button, ScrollView } from "react-native";
import { Icon } from 'react-native-elements';

export class DrawerContentScreen extends Component {

    handlerConfiguration() {
        console.log("Configuration");
    }

    handlerLogout() {
        this.props.onLogout();
        console.log("Logout");
    }

    render() {

        return (
            <View style={styles.container}>
                
                    <ImageBackground source={require('../app/img/sky.jpg')} style={styles.img}>
                        
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
                                        label="Anime api"
                                        onPress={() => this.props.navigation.navigate("API")}
                                    />

                                    <DrawerItem
                                        icon={() => <Icon type="material-community" name="react" style={styles.icon} />}
                                        label="RaM api"
                                        onPress={() => this.props.navigation.navigate("RaMapi")}
                                    />
                                     <DrawerItem
                                        icon={() => <Icon type="material-community" name="paw" style={styles.icon} />}
                                        label="Cat api"
                                        onPress={() => this.props.navigation.navigate("Cat")}
                                    />
                                     <DrawerItem
                                        icon={() => <Icon type="material-community" name="rocket" style={styles.icon} />}
                                        label="Strar Wars api"
                                        onPress={() => this.props.navigation.navigate("Swapi")}
                                    />
                                    <DrawerItem
                                        icon={() => <Icon type="material-community" name="account-question" style={styles.icon} />}
                                        label="Superhero api"
                                        onPress={() => this.props.navigation.navigate("superheroapi")}
                                    />
                                    <DrawerItem
                                        icon={() => <Icon type="material-community" name="flask" style={styles.icon} />}
                                        label="Breaking bad api"
                                        onPress={() => this.props.navigation.navigate("breakingbadapi")}
                                    />
                                    <DrawerItem
                                        icon={() => <Icon type="material-community" name="glass-mug" style={styles.icon} />}
                                        label="Bear api"
                                        onPress={() => this.props.navigation.navigate("openbrewerydb")}
                                    />
                                     <DrawerItem
                                        icon={() => <Icon type="material-community" name="scale-balance" style={styles.icon} />}
                                        label="Dolar api"
                                        onPress={() => this.props.navigation.navigate("Dolar")}
                                    />
                                    <DrawerItem
                                        icon={() => <Icon type="material-community" name="tank" style={styles.icon} />}
                                        label="chucknorris api"
                                        onPress={() => this.props.navigation.navigate("chucknorris")}
                                    />
                                    <DrawerItem
                                        icon={() => <Icon type="material-community" name="nintendo-switch" style={styles.icon} />}
                                        label="Mario api"
                                        onPress={() => this.props.navigation.navigate("amiiboapi")}
                                    />
                                     <DrawerItem
                                        icon={() => <Icon type="material-community" name="pokeball" style={styles.icon} />}
                                        label="Pokemon api"
                                        onPress={() => this.props.navigation.navigate("pokeapi")}
                                    />      
                                     <DrawerItem
                                        icon={() => <Icon type="material-community" name="volume-high" style={styles.icon} />}
                                        label="sonido "
                                        onPress={() => this.props.navigation.navigate("sonido")}
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

                    </ImageBackground>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //  backgroundColor: '#49CBEE',
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
    },
    box: {
        flex: 1,
        textAlign: 'center',
        padding: '5px'

    },
    img: {
        width: 280,
        height: 650,
    },
    
});