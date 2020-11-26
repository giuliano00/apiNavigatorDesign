import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';

export default class APIinfo extends Component {
    render() {
        return (
            <ImageBackground source={require("./appimg/img/aapp.jpg")} style={styles.container}>
                <ScrollView>
                    <Text>..</Text>

                    <Text>Kitsu es una api </Text>

                    <StatusBar style="auto" />
                </ScrollView>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 1,
        textAlign: 'center',
        padding: '5px'

    },

});