import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';

export default class APIinfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                        <View style={styles.container}>
                            <View style={styles.inner}>
                            
                                <Text>..</Text>

                                <Text>Kitsu es una api </Text>

                                <StatusBar style="auto" />
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
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