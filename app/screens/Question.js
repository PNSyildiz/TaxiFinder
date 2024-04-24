import React from 'react'
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';
import { TouchableOpacity } from 'react-native';

function Question() {
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
        <View style={styles.QuestionContainer}>
            <View style={styles.ContainerTop}>
                    <Text style={styles.ContainerFrom}>Katlehong Moleleki ext 1</Text>
                    <Text style={styles.ContainerTo}>Johannesburg Braamfontein</Text>
            </View>

            <View>
                <TextInput
                    style={styles.LocationText}
                    placeholder='Taxi location' 
                    
                />
                {/* <Icon name="search" size={15} style={styles.searchIcon}></Icon> */}
            </View>
         

            <TextInput
                style={styles.PriceText}
                placeholder='Price' 
            />

            <View style={styles.BoxImage}>
                <TouchableOpacity>
                    <Icon name='paperclip' size={40} color={"grey"} margin={20}><Text style={{fontSize: 10}}>Please attach a sign</Text></Icon>
                </TouchableOpacity>
                
                <Text style={styles.ImageSection}/>
            </View>

            <TextInput
                style={styles.AddNoteText}
                placeholder='Add a note' 
            />

            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <Icon name='plus' size={15} color={"#FFFFFF"}> Add</Icon>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name='save' size={15} color={"#FFFFFF"}> Submit</Icon>
                </TouchableOpacity>
            </View>

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

        </View>
        
        <View style={{alignItems: 'center', margin: 10}}>
            <AppButton title= "More" />
        </View>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
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
    QuestionContainer: {
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
    LocationText: {
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "grey",
    }, 
    PriceText: {
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "grey",
        width: 110,
    },
    AddNoteText: {
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "grey",
    },
    bottomContainer: {
        backgroundColor: "#006C67",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 9,
    },
    ImageSection: {
        borderRadius: 9,
        backgroundColor: "#D9D9D9",
        width: 165,
        height: 130,
    },
    BoxImage: {
        flexDirection: 'row',
    },
    HeaderText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 23,
        fontWeight: '700',
        marginBottom: 20,
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
    searchIcon: {
        
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
    scrollContainer: {
        marginTop: 100,
    }
})

export default Question;
