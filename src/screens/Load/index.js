import { Image, Text, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Load = () => {

    const navigation = useNavigation();

    useEffect(() => {

        interval = setInterval(() => {
            navigation.navigate('Home');
        }, 1500);

    }, [])

    return (
        <Container>
            <Image
                style={style.image}
                source={require('../../assets/icons/logo-decolaTech.png')}
            />
            <LoadingIcon size='large' />
        </Container>
    )
}

export default Load;

const style = StyleSheet.create({

    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 190,
        width: 250,
        height: 250,
    },

});