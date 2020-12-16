import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Button, ScrollView } from 'react-native';


const axios = require('axios');

export default class superheroapi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "Value",
            done: false,
            heroe: []
        }
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    handlerbtn() {
        var id = this.state.value;
        axios.get("https://www.superheroapi.com/api.php/10223922732878088/" + id)
            .then(heroe => {
                if (heroe.data != false) {
                    this.setState({

                        done: true,
                        heroe: heroe.data
                    })
                    console.log(this.state);
                    console.log(this.state.heroe.powerstats);
                }
            })
            .catch(error => {
                console.log(error);
            });


    }

    updateInputValue(evt) {

        this.setState({ id: evt.target.value });

    }
    handlerTxt(text) {
        var id = text;
        this.setState({ value: id });
    }

    render() {

        if (this.state.done !== true) {
            return (

                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>
                                <ImageBackground source={require('../app/img/BATMAN.gif')} style={styles.gif}></ImageBackground>
                                    <Text style={styles.titulo}>Busca un personaje del 1 al 100: </Text>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: 250,
                                            borderColor: 'white',
                                            borderWidth: 1,
                                            backgroundColor: '#ffebee'
                                        }}
                                        placeholder='Escriba aquí...'
                                        onChangeText={this.handlerTxt.bind(this)}
                                    />
                                    <Button title="Buscar" style={styles.button} onChange={this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='codigo de superheroe' />
                                </View>

                            </View>
                        </ImageBackground>
                    </ScrollView >
                </View >
            )
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>

                                    <Text style={styles.titulo}>Recuerda del 1 al 100</Text>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: 250,
                                            borderColor: 'white',
                                            borderWidth: 1,
                                            color: '#ffebee',
                                            marginBottom: 10,
                                        }}
                                        placeholder='Escriba aquí'
                                        onChangeText={this.handlerTxt.bind(this)}
                                    />
                                    <Button title="Buscar" style={styles.button} onChange={this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='codigo de superheroe' />

                                    <Text style={{ color: '#000000', fontSize: 25, margin: 5 }}>Nombre: {this.state.heroe.name} </Text>
                                    <Text style={{ color: '#063880', fontSize: 20, margin: 5 }}>Combat: {this.state.heroe.powerstats.combat} </Text>
                                    <Text style={{ color: '#063880', fontSize: 20, margin: 5 }}>Durability: {this.state.heroe.powerstats.durability} </Text>
                                    <Text style={{ color: '#063880', fontSize: 20, margin: 5 }}>Intelligence: {this.state.heroe.powerstats.intelligence} </Text>
                                    <Text style={{ color: '#063880', fontSize: 20, margin: 5 }}>Power: {this.state.heroe.powerstats.power} </Text>
                                    <Text style={{ color: '#063880', fontSize: 20, margin: 5 }}>Speed: {this.state.heroe.powerstats.speed} </Text>
                                    <Text style={{ color: '#063880', fontSize: 20, margin: 5 }}>Strength: {this.state.heroe.powerstats.strength} </Text>


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
        height: '60%',
        backgroundColor: 'rgba(255,255,255,.6)',

        alignItems: 'center',
        justifyContent: 'center',

    },

});