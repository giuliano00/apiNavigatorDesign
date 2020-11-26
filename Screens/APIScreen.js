import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Button, ScrollView } from 'react-native';

import axios from 'axios';

export default class APIScreen extends Component {
    state = {
        response: [],
        estado: false
    }

    setpersonaje(p) {
        var per = p;
        this.setState({ value: per });
    }

    buscarpersonaje = () => {
        var per = this.state.value;

        axios.get("https://kitsu.io/api/edge/characters/" + per)
            .then(res => {
                console.log(res);
                if (res.data != false) {
                    this.setState({
                        response: res.data,
                        estado: true
                    })
                } else {
                    console.log("Error");
                }
            });
    }

    render() {

        if (this.state.estado != true) {
            return (

                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>
                                    <Text>busca personaje por id?</Text>
                                    <TextInput
                                        style={{ height: 70, borderColor: 'gray', borderWidth: 1, margin: 15, padding: 10 }}
                                        onChangeText={this.setpersonaje.bind(this)}
                                    />
                                    <Button
                                        onPress={this.buscarpersonaje.bind(this)}
                                        title="Buscar"
                                        color="#4f9a94"
                                    />
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
                                <View style={styles.inner}></View>
                                <Text>busca un personaje por id </Text>
                                <TextInput
                                    style={{ height: 70, borderColor: 'gray', borderWidth: 1, margin: 15, padding: 10 }}
                                    onChangeText={this.setpersonaje.bind(this)}

                                />
                                <Button
                                    onPress={this.buscarpersonaje.bind(this)}
                                    title="Buscar"
                                    color="#4f9a94"
                                />
                                <Text style={styles.box}>nombre : {this.state.response.data.attributes.canonicalName}</Text>
                                <Text style={styles.box}>nombre en japones : {this.state.response.data.attributes.names.ja_jp}</Text>
                                <Text style={styles.box}>otro nombre : {this.state.response.data.attributes.otherNames}</Text>
                                <Text style={styles.box}>descripcion : {this.state.response.data.attributes.description}</Text>
                            </View>

                        </ImageBackground>
                    </ScrollView >
                </View>

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
    inner: {
        width: '80%',
        height: '50%',
        backgroundColor: 'rgba(255,255,255,.6)',

        alignItems: 'center',
        justifyContent: 'center',

    },

});