
import React from 'react';
import { Image, Button, View, StyleSheet ,ImageBackground,Text} from 'react-native';

import { Audio } from 'expo-av';

export default class sonido extends React.Component {

    constructor(props) {
        super(props);

        this.playbackObject = new Audio.Sound();
    }

    btnPlayeClicked = async () => {

        await this.playbackObject.loadAsync(require('../app/music/djv.mp3'));
        await this.playbackObject.playAsync();


    };

    render() {
        return (
            <View style={styles.container}>
               
                    <ImageBackground source={require('../app/img/login.jpg')} style={styles.img}>
                        <View style={styles.container}>
                            <View style={styles.inner}>
                               
                                <Text>ponele onda con una cancion!!!</Text>
                                <Button title="Play" onPress={this.btnPlayeClicked} />
                                

                            </View>
                        </View>
                    </ImageBackground>
                
            </View >
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
    gif: {


        width: 260,
        height: 200,
    },
    inner: {
        width: '80%',
        height: '70%',
        backgroundColor: 'rgba(255,255,255,.6)',

        alignItems: 'center',
        justifyContent: 'center',

    },

});