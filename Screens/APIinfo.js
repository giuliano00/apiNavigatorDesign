import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button ,ScrollView} from 'react-native';
import axios from 'axios';

export class APIinfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>..</Text>

                    <Text>Kitsu es una api </Text>
                    
                    <StatusBar style="auto" />
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49CBEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 1,
        textAlign: 'center',
        padding: '5px'

    },

});