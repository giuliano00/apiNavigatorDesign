import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class APIScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the API screen</Text>
                <StatusBar style="auto" />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8300',
        alignItems: 'center',
        justifyContent: 'center',
    },
});