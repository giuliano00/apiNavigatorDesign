import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View, Text, ImageBackground, ScrollView } from 'react-native';
const axios = require('axios');


export default class amiiboapi extends Component {
    handlerBtn() {

        axios.get("https://www.amiiboapi.com/api/amiibo", { params: { name: this.state.nombre } })
            .then(response => {
                console.log(response.data);
                this.setState(() => {
                    return {
                        consulteApi: true, data1: response.data.amiibo[0].name,
                        data2: response.data.amiibo[0].amiiboSeries
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });

        console.log("Me clickearon");
    }

    handlerTxt(text) {
        console.log("Escribieron" + text);
        this.setState({ nombre: text });

    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                        <View style={styles.container}>
                            <View style={styles.inner}>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                                    onChangeText={text => this.handlerTxt(text)}
                                />
                                <ImageBackground source={require('../app/img/M.gif')} style={styles.gif}></ImageBackground>

                                <Button
                                    onPress={this.handlerBtn.bind(this)}
                                    title="Consultar API"
                                    color="#841584"
                                    accessibilityLabel="Learn more about this purple button" />

                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView >
            </View >
        );

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
        height: '50%',
        backgroundColor: 'rgba(255,255,255,.6)',

        alignItems: 'center',
        justifyContent: 'center',

    },

});
