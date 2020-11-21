import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>Kitsu es una api que trae información de distintos animes a través de un id, también posee
                    información de mangas y personajes entre otros en el apartado de anime puede traer por
                    id el titulo las fechas de inicio de fin la duración de los episodios la cantidad de capítulos ,
                esta son solo algunos datos que trae la api .</Text>

                    <Text>..</Text>

                    <Text>https://kitsu.docs.apiary.io/#introduction/authentication/access-token-responses</Text>

                    <Text>..</Text>

                    <Text>ALGUNAS FUNCIONES:</Text>

                    <Text>..</Text>

                    <Text> BUSCAR POR ID </Text>

                    <Text> TRAE DURACION DE LOS EPISODEOS</Text>

                    <Text> CANTIDAD DE EPISODEOS</Text>

                    <Text> FECHA DE INICIO Y FIN</Text>

                    <Text>..</Text>

                    <Text>Métodos:</Text>

                    <Text>..</Text>

                    <Text>GET Fetch - retrieve resources.</Text>

                    <Text>POST Create - create new resources.</Text>

                    <Text>PATCH Update - (partially) modify existing resources</Text>

                    <Text>DELETE Delete - remove resources</Text>

                    <Text>..</Text>
                    


                    <StatusBar style="auto" />
                </ScrollView>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#41C2A5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});// shift alt f acomoda codigo