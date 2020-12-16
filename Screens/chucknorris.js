import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';


export default class chucknorris extends Component {
    options = {
        url: 'https://api.chucknorris.io/jokes/random'
    };

    state = {
        apiConsumed: false,
        fact: "",
        icon: "",
        txt: "",
        name: "",
    };

    constructor(props) {
        super(props);
        this.handlerBtn = this.handlerBtn.bind(this);
        this.handlerTxt = this.handlerTxt.bind(this);
    };

    handlerTxt(name) {
        this.setState({ name });
    }

    handlerBtn() {
        const resp = axios.get('https://api.chucknorris.io/jokes/random')
        resp.then(r => {
            this.setState({
                fact: r.data.value,
                icon: r.data.icon_url,
                apiConsumed: true
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                        <View style={styles.container}>
                            <View style={styles.inner}>

                            <ImageBackground source={require('../app/img/CHN.gif')} style={styles.gif}></ImageBackground>
                                <Button
                                    onPress={this.handlerBtn}
                                    title="Frase Aleatoria"
                                    color="#603813"
                                />
                                <Text style={this.textFact}>
                                    {this.state.fact}
                                </Text>

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