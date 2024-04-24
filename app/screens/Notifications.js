import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const notificationMessages = [
    {
        id: 1,
        message: 'Hey taxi finders! Where can I get taxis from joburg to Diepkloof Zone 4?',
    },
    {
        id: 2,
        message: 'Hey taxi finders! Where can I get taxis from joburg to Diepkloof Zone 4?',
    },
    {
        id: 3,
        message: 'Hey taxi finders! Where can I get taxis from joburg to Diepkloof Zone 4?',
    },
    
]

function Notifications() {
    const renderItem = ({ item }) => (
        <View>
            <Text style={styles.messagebox}>{item.message}</Text>
        </View>
    )
  return (
    <View style={styles.container}>
        <View style={styles.navigation}>
            <View style={styles.LeftIcon}>
                <TouchableOpacity>
                    <Icon name="home" size={35} color={"#FFFFFF"} />
                </TouchableOpacity>
            </View>

            <View style={styles.RightIcons}>
                <TouchableOpacity>
                    <Icon name="bell" size={30} color={"#FFFFFF"} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name="user-circle" size={30} color={"#FFFFFF"} />
                </TouchableOpacity>
            </View>
         </View>
        
        <View style={styles.message}>
            <FlatList 
                data={notificationMessages} 
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
       

    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#006C67",
        // height: 220,
        
    },
    navigation: {
        backgroundColor: "#006C67",
        height: 100,
        padding: 20,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    LeftIcon: {
        marginTop: 25,
    },
    RightIcons: {
        marginTop: 25,
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
    },
    message: {
        padding: 20,
    },
    messagebox: {
        marginBottom: 30,
        fontSize: 15,
        backgroundColor: "#E0E0E0",
        padding: 15,
        borderRadius: 10,
    },
  
})

export default Notifications;
