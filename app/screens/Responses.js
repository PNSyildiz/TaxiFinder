import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';
import { TouchableOpacity } from 'react-native';

function Responses() {
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
        <ScrollView style={styles.scrollContainer}>
        <Text style={styles.HeaderText}>Responses</Text>

        <View style={styles.ResponseContainer}>
            <View style={styles.ContainerTop}>
                <Text style={styles.ContainerFrom}>Katlehong Moleleki ext 1</Text>
                <Text style={styles.ContainerTo}>Johannesburg Braamfontein</Text>
            </View>

            <Text style={styles.locationName}>Taxi location: Mtn Noord Taxi Rank</Text>
            <Text style={styles.taxiPrice}>Price: R25</Text>

            <View style={styles.containerLocators}>
                <TouchableOpacity>
                    <Icon name='hand-paper-o' size={30} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='map-marker' size={30} style={{marginRight: 10}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Icon name='thumbs-up' size={15} color={"#FFFFFF"}> Like</Icon>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='comment' size={15} color={"#FFFFFF"}> Comment</Icon>
                </TouchableOpacity>
               
                <TouchableOpacity>
                    <Icon name='share-alt' size={15} color={"#FFFFFF"}> Share</Icon>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='plus' size={15} color={"#FFFFFF"}> Add</Icon>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.ResponseContainer}>
            <View style={styles.ContainerTop}>
                <Text style={styles.ContainerFrom}>Katlehong Moleleki ext 1</Text>
                <Text style={styles.ContainerTo}>Johannesburg Braamfontein</Text>
            </View>

            <Text style={styles.locationName}>Taxi location: Mtn Noord Taxi Rank</Text>
            <Text style={styles.taxiPrice}>Price: R25</Text>

            <View style={styles.containerLocators}>
                <TouchableOpacity>
                    <Icon name='hand-paper-o' size={30} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='map-marker' size={30} style={{marginRight: 10}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Icon name='thumbs-up' size={15} color={"#FFFFFF"}> Like</Icon>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='comment' size={15} color={"#FFFFFF"}> Comment</Icon>
                </TouchableOpacity>
               
                <TouchableOpacity>
                    <Icon name='share-alt' size={15} color={"#FFFFFF"}> Share</Icon>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='plus' size={15} color={"#FFFFFF"}> Add</Icon>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{alignItems: 'center', margin: 10}}>
            <AppButton title="More" />
        </View>
        
        
        </ScrollView>
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
        position: 'absolute',
        zIndex: 10,
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
    HeaderText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 23,
        fontWeight: '700'
    },
    ResponseContainer: {
        margin: 20,
        borderRadius: 9,
    },
    ContainerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#006C67",
        borderRadius: 9,
    },
    ContainerFrom: {
        fontSize: 12,
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        margin: 5,
        padding: 5,
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
    },
    ContainerTo: {
        fontSize: 12,
        borderWidth: 1,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        margin: 5,
        padding: 5,
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
    },
    locationName: {
        margin: 15,
        fontSize: 17,
    },
    taxiPrice: {
        marginLeft: 15,
        marginBottom: 15,
        fontSize: 17,
    },
    containerLocators: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
        backgroundColor: "#006C67",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 9,
    },
    scrollContainer: {
        marginTop: 100,
    }
})

export default Responses;
