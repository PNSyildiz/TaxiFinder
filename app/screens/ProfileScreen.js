import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';

function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center'}}>Profile</Text>
        <View style={{flexDirection: 'row', padding: 20}}>
            <Text style={styles.circleInitials}>KK</Text>
            <Text style={styles.name}>Kabelo Kgoadi</Text>

            <TouchableOpacity style={{marginTop: 30, marginLeft: 30}}>
                <Icon name='pencil' size={23} color={"#FFFFFF"} />
            </TouchableOpacity>
        </View>
            

        <View style={styles.wrapper}>
            <Image style={styles.image} source={require("../assets/logo (1).png")} />

            <View style={styles.homeContainer}>
                <TouchableOpacity>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 'auto'}}>
                    <Icon name='chevron-right' size={20} color={'grey'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.postsContainer}>
                <TouchableOpacity>
                    <Text style={styles.text}>Posts</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft: 'auto' }}>
                    <Icon name='chevron-right' size={20} color={'grey'}/>
                </TouchableOpacity>
                
            </View>
            
            <View style={styles.passContainer}>
                <TouchableOpacity>
                    <Text style={styles.text}>Change Password</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginLeft: 'auto'}}>
                    <Icon name='chevron-right' size={20} color={'grey'}/>
                </TouchableOpacity>
            </View>
           
            <View style={{marginTop: 30}}>
                <AppButton title="Signout" />
            </View>
            

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#006C67",
        paddingTop: 40,
        height: 300,
    },
    wrapper: {
        marginTop: 10,
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
        height: 650,
        alignItems: 'center',
     },
    circleInitials: {
        borderRadius: 100,
        width: 70,
        padding: 20,
        margin: 10,
        backgroundColor: "#FFFFFF",
        fontSize: 20,
        fontWeight: '700',
    },
    name: {
        marginTop: 30,
        fontSize: 15,
        color: "#FFFFFF",
        marginLeft: 15,
    },
    image: {
        width: 110,
        height: 100,
        marginTop: 50,
        marginBottom: 50,
        
    },
    text: {
        fontSize: 20,
        fontWeight: '200',
    },
    homeContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 15,
        width: 330,
    },
    postsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 15,
        width: 330,
    },
    passContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 15,
        width: 330,
    },
   
})

export default ProfileScreen
