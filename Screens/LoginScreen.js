import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, Button, ScrollView } from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component {

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle() {

        try {
            const result = await Google.logInAsync({
                androidClientId: "621423752804-d66pvvbsfq010hhpsb60s6iu9mus1ru6.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error) {
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                         
                        <View style={styles.container}>
                            
                            <View style={styles.inner}>
                           <ImageBackground source={require('../app/img/luffy.gif')} style={styles.gif}></ImageBackground>
                                <Button
                                    onPress={() => this._signInWithGoogle()}
                                    title="Iniciar sesión con Google"
                                />
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
        //backgroundColor: '#6192C0',
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
        height: 660,
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