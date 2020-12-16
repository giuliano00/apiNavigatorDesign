import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Image, Button, ListItem, ImageBackground, ScrollView } from 'react-native';

export default class pokeapi extends Component {

    state = {

        response: [],
        estado: null

    }

    handlerBuscar(t) {

        var buscar = t.toLowerCase();
        this.setState({ value: buscar });

    }

    consultarApiRandom() {

        var aleatorio = Math.round(Math.random() * 100) + 1;
        axios.get("https://pokeapi.co/api/v2/pokemon/" + aleatorio
        )
            .then(
                dato => {
                    console.log(dato.data);

                    this.setState({
                        response: dato.data,
                        estado: true

                    })
                    console.log(this.state)
                })
    }

    consultarApi() {
        var buscar = this.state.value;
        if (buscar === null) {
            axios.get("https://pokeapi.co/api/v2/pokemon/"
            )
                .then(
                    dato => {
                        console.log(dato.data);

                        this.setState({
                            response: dato.data,
                            estado: true

                        })
                        console.log(this.state)

                    });
        } else {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + buscar)
                .then(
                    dato => {
                        console.log(dato.data);

                        this.setState({
                            response: dato.data,
                            estado: true

                        })
                        console.log(this.state)

                    });
        }
    }

    render() {

        if (this.state.estado !== true) {

            return (


                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>

                                <ImageBackground source={require('../app/img/pok.gif')} style={styles.gif}></ImageBackground>
                                    <Text style={styles.App2}>¡Elige tu pokemon!</Text>
                                    <View style={{ flexDirection: "row" }} >

                                        <View style={{ flex: 1 }}>
                                            <TextInput style={{ height: 35, borderColor: 'gray', borderWidth: 1, margin: 5 }} onChangeText={this.handlerBuscar.bind(this)} />
                                        </View>
                                        <View style={{ flex: 0.5 }}>
                                            <Button type="button" title="Buscar" onPress={this.consultarApi.bind(this)} />
                                        </View>
                                    </View>

                                    <View style={styles.separator2} >
                                        <Text style={styles.App2} >¡Déjalo a la suerte!</Text >
                                        <Button type="button" title="Buscar" onPress={this.consultarApiRandom.bind(this)} />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView >
                </View >

            );
        } else if (this.state.estado === true) {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>
                                    <Text>Tu pokemon elegido es</Text>
                                    <Text>{this.state.response.name}</Text>
                                    <Image style={{ height: 250, width: 250 }} source={{ uri: this.state.response.sprites.front_default }} />

                                    <Text>Habilidades:</Text>
                                    {this.state.response.abilities.map(item => (
                                        <Text key={item.ability.name}>
                                            {item.ability.name}

                                        </Text>
                                    ))}
                                    <View style={styles.separator2} >
                                        <Text style={styles.App2} >¡Déjalo a la suerte!</Text >
                                        <Button type="button" title="Buscar" onPress={this.consultarApiRandom.bind(this)} />
                                    </View>
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