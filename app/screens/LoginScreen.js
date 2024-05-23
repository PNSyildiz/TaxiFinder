import React from 'react'
import {ScrollView, StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';

function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.wrap}>
            <Image style={styles.image} source={require("../assets/logo (1).png")} />
            <Text style={{fontSize: 20, fontWeight: '700'}}>Login</Text>

            <TextInput style={styles.EmailInput} placeholder='Email' />
            <TextInput style={styles.PassInput} placeholder='Password' />

            <AppButton title= "Login"/>

            <Text style={{marginBottom: 10, marginTop: 5}}>or</Text>
            <View style={{flexDirection: 'row', gap: 7, marginBottom: 10}}>
                <TouchableOpacity>
                    <Icon name="google" size={20} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name="facebook" size={20}/>
                </TouchableOpacity>
                
            </View>
            <Text style={{fontWeight: '300', fontSize: 12}}>Need an account? <TouchableOpacity><Text style={{fontWeight: '400', fontSize: 12, textDecorationLine: 'underline'}}>Sign Up</Text></TouchableOpacity></Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#006C67",
        height: 800,
    },
    wrap: {
        marginTop: 100,
        marginBottom: 100,
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9,
        height: 550,
    },
    image: {
        width: 120,
        height: 100,
        marginTop: 50,
        marginBottom: 50,
    },
    EmailInput : {
        borderWidth: 1,
        width: 330,
        borderRadius: 9,
        padding: 10,
        margin: 30,
        borderColor: 'grey',
    },
    PassInput: {
        borderWidth: 1,
        width: 330,
        borderRadius: 9,
        padding: 10,
        borderColor: 'grey',
        marginBottom: 15,
    }
})

export default LoginScreen;
