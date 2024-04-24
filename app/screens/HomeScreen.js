import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';

function HomeScreen() {
    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        { label: 'extension', value: '1'},
        { label: 'phase', value: '2'},
        { label: 'unit', value: '3'},
        { label: 'block', value: '4'},
    ];

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
                
            </View >
            <ScrollView style={styles.scrollContainer}>
            <View style={styles.Form}>
                  <Text style={{ textAlign: 'center', padding: 15, fontWeight: 'bold' }}>FROM</Text>
                  <Text style={{marginLeft: 20}}>Town/Township/City</Text>
                  <TextInput 
                        style={styles.InputBox}
                        placeholder="e.g Soweto / Katlehong / Johannesburg"
                  />
                <Text style={{marginLeft: 20}}>Area</Text>
                  <TextInput 
                        style={styles.InputBox}
                        placeholder="e.g Diepkloof / Siluma / Braamfontein"
                  />
                <Text style={{marginLeft: 20}}>Section</Text>
                
                <View style={styles.section}> 
                    <DropDownPicker
                        items={items}
                        defaultValue={selectedValue}
                        style={{ height: 10, width: 200, margin: 20, borderWidth: 2 }}
                        onChangeItem={item=>setSelectedValue(item.value)}
                    />
                    <TextInput 
                            style={styles.secBox}
                            placeholder="e.g 4 / 2B"
                    />
                </View>
                
                <Text style={{ textAlign: 'center', padding: 15, fontWeight: 'bold' }}>TO</Text>
                <Text style={{marginLeft: 20}}>Town/Township/City</Text>
                  <TextInput 
                        style={styles.InputBox}
                        placeholder="e.g Soweto / Katlehong / Johannesburg"
                  />
                <Text style={{marginLeft: 20}}>Area</Text>
                  <TextInput 
                        style={styles.InputBox}
                        placeholder="e.g Diepkloof / Siluma / Braamfontein"
                  />
                <Text style={{marginLeft: 20}}>Section</Text>
                
                <View style={styles.section}> 
                    <DropDownPicker
                        items={items}
                        defaultValue={selectedValue}
                        style={{ height: 10, width: 200, margin: 20, borderWidth: 2 }}
                        onChangeItem={item=>setSelectedValue(item.value)}
                    />
                    <TextInput 
                            style={styles.secBox}
                            placeholder="e.g 4 / 2B"
                    />

                </View>
                
                <View style={{alignItems: 'center'}}>
                    <AppButton title= "Search" />
                </View>
                
                   
            </View>
            </ScrollView>
        </View>

    );
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
    Form: {
        marginTop: 2,
        backgroundColor: "#FFFFFF",
        margin: 30,
    },
    InputBox: {
        borderWidth: 2,
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 9,
    },
    secBox: {
        borderWidth: 2,
        margin: 20,
        padding: 9,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        borderRadius: 9,
    },
    section: {
        flexDirection: 'row',
    },
    scrollContainer: {
        marginTop: 100,
    }

})

export default HomeScreen;
