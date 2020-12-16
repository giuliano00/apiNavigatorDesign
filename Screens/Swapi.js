import React, { Component } from 'react';
import { Container, Button, Text, Item, Label, Input, ListItem, Body, Icon } from 'native-base';
import { StyleSheet, View, FlatList, ImageBackground, ScrollView } from 'react-native';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { Header } from 'react-native-elements';

export default class SearchCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            data: undefined,
            value: undefined,
            isReady: false,
            buttonNext: false,
        };

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handlerButton = this.handlerButton.bind(this);
        this.handlerText = this.handlerText.bind(this);
        this.handlerNext = this.handlerNext.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    handleData() {
        this.setState({
            loading: false,
            error: null,
            data: undefined,
            value: undefined,
            isReady: true,
            buttonNext: false,
        });

    }

    peopleGetName = (name) =>
        new Promise((resolve, reject) => {
            fetch(`https://swapi.dev/api/people/?search=${name}`)
                .then((response) => {
                    if (response.status != 404) return response.json();
                    return false;
                })
                .then((json) => resolve(json));
        });

    peopleNext = () =>
        new Promise((resolve, reject) => {
            if (this.state.data.next) {
                this.setState({
                    buttonNext: true,
                });
                fetch(this.state.data.next)
                    .then((response) => {
                        if (response.status != 404) return response.json();
                        return false;
                    })
                    .then((json) => resolve(json));
            } else {
                this.setState({
                    buttonNext: false,
                });
                return null;
            }
        });

    handlerText(e) {
        this.setState({ value: e });
    }

    handlerNext() {
        this.peopleNext().then((data) => {
            if (data.next) {
                this.setState({
                    loading: true,
                    data: data,
                    buttonNext: true,
                });
            } else {
                this.setState({
                    loading: true,
                    data: data,
                    buttonNext: false,
                });
            }
        });
    }

    handlerButton() {
        let name = this.state.value;
        this.peopleGetName(name).then((data) => {
            if (data.next) {
                this.setState({
                    loading: true,
                    data: data,
                    buttonNext: true,
                });
            } else {
                this.setState({
                    loading: true,
                    data: data,
                    buttonNext: false,
                });
            }
        });
    }

    render() {
        const { error, loading, data, value, isReady, buttonNext } = this.state;
        let button;

        if (buttonNext) {
            button = (
                <Button
                    primary
                    block
                    style={{ marginTop: "2%" }}
                    onPress={this.handlerNext}
                    title="Consultar Api"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                >
                    <Text>Siguiente</Text>
                </Button>
            );
        } else {
            button = (
                <Button
                    block
                    style={{ marginTop: "2%" }}
                    color="#841584"
                    onPress={this.handleData}
                >
                    <Text>Volver a Buscar</Text>
                </Button>
            );
        }
        if (this.state.isReady == false) {

            return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>

                                    <View>
                                        <Text>Cargando...</Text>
                                    </View>


                                </View>

                            </View>
                        </ImageBackground>
                    </ScrollView >
                </View >
            );
        } else if (!loading) {

            return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>

                                    <View style={styles.container}><ImageBackground source={require('../app/img/SW.gif')} style={styles.gif}></ImageBackground>
                                        <Item floatingLabel>
                                        
                                            <Label>Personaje</Label>
                                            <Input onChangeText={(text) => this.handlerText(text)} />
                                        </Item>
                                        <Button
                                            primary
                                            block
                                            style={{ marginTop: "2%" }}
                                            onPress={this.handlerButton}
                                            title="Consultar Api"
                                            color="#841584"
                                            accessibilityLabel="Learn more about this purple button"
                                        >
                                            <Text>Buscar</Text>
                                        </Button>
                                    </View>



                                </View>

                            </View>
                        </ImageBackground>
                    </ScrollView >
                </View >
            );
        } else if (Array.isArray(data.results) && data.results.length != 0) {

            return (
                <View style={styles.container}>
                    <ScrollView>
                        <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                            <View style={styles.container}>
                                <View style={styles.inner}>
                                <ImageBackground source={require('../app/img/SW.gif')} style={styles.gif}></ImageBackground>
                                    <FlatList
                                        data={data.results}
                                        renderItem={({ item }) => {
                                            return (
                                               
                                                    <Body style={{ marginRight: 0 }}>
                                                        <Text>{item.name}</Text>
                                                        <Text>{item.hair_color}</Text>
                                                        <Text>{item.height}</Text>
                                                        <Text>{item.mass}</Text>
                                                        <Text>{item.skin_color}</Text>
                                                        <Text>{item.eye_color}</Text>
                                                        <Text>{item.gender}</Text>

                                                    </Body>
                                               
                                            );
                                        }}
                                        keyExtractor={(item) => item.name}
                                        stickyHeader
                                        Indices={this.state.stickyHeaderIndices}
                                    />
                                    {button}
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
                                <View style={styles.inner}>                                  
                                    <View style={styles.container}>
                                    <ImageBackground source={require('../app/img/SW.gif')} style={styles.gif}></ImageBackground>
                                        <Text>No se encontraron datos</Text>
                                        {button}
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

        
        justifyContent: 'center',

    },

});