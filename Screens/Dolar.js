import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList  ,TextInput, ImageBackground, ScrollView} from 'react-native';


const axios = require('axios');

export default class Dolar extends Component {

    constructor(props) {
        super(props);
        this.state = { consulteApi: false, item: [] };
    }

    hundlerBt() {
        this.setState(() => { return { consulteApi: false } });
        axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            .then(response => {
                this.setState(() => { return { consulteApi: true, item: response.data } });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.consulteApi) {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>
                                <ImageBackground source={require('../app/img/DOLLAR.gif')} style={styles.gif}></ImageBackground>
                                    <Button
                                        onPress={this.hundlerBt.bind(this)}
                                        title="Consultar Precio dolar"
                                        color="#006400"
                                        accessibilityLabel="Learn more about this purple button"
                                    />


                                    <View style={styles.containerDolar}>
                                        <Text>Precio dolar Blue Compra</Text>
                                        <Text>{this.state.item[1].casa.compra}</Text>
                                        <Text>Precio dolar Blue Venta</Text>
                                        <Text>{this.state.item[1].casa.venta}</Text>
                                        <Text>Precio dolar Oficial Compra</Text>
                                        <Text>{this.state.item[0].casa.compra}</Text>
                                        <Text>Precio dolar Oficial Venta</Text>
                                        <Text>{this.state.item[0].casa.venta}</Text>
                                    </View>


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

                                <ImageBackground source={require('../app/img/DOLLAR.gif')} style={styles.gif}></ImageBackground>
                                    <Button
                                        onPress={this.hundlerBt.bind(this)}
                                        title="Consultar Precio dolar"
                                        color="#006400"
                                        accessibilityLabel="Learn more about this purple button"
                                    />


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
        //backgroundColor: '#83DDF5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 1,
        textAlign: 'center',
        padding: '5px'

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
        height: '80%',
        backgroundColor: 'rgba(255,255,255,.6)',

        alignItems: 'center',
        justifyContent: 'center',

    },

});