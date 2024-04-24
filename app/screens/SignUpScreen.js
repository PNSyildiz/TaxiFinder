import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';

function SignUpScreen() {
    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        { label: 'extension', value: '1'},
        { label: 'phase', value: '2'},
        { label: 'unit', value: '3'},
        { label: 'block', value: '4'},
    ];

  return (
   <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Sign Up</Text>
            <Text style={{fontSize: 12, fontWeight: '400', marginTop: 10}}>Register with</Text>

            <View style={{flexDirection: 'row', gap: 7, marginTop: 10, marginBottom: 10}}>
                <TouchableOpacity>
                    <Icon name="google" size={20} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon name="facebook" size={20}/>
                </TouchableOpacity>
            </View>

            <Text>or</Text>

            <TextInput style={styles.nameInput} placeholder='Name' />
            <TextInput style={styles.emailInput} placeholder='Email' />
            <TextInput style={styles.PassInput} placeholder='Password' />

            <Text style={{marginTop: 10, marginRight: 195}}>Town/Township/City</Text>
                  <TextInput 
                        style={styles.InputBox}
                        placeholder="e.g Soweto / Katlehong / Johannesburg"
                  />
            <Text style={{marginRight: 290}}>Area</Text>
                  <TextInput 
                        style={styles.InputBox}
                        placeholder="e.g Diepkloof / Siluma / Braamfontein"
                  />

            <Text style={{marginRight: 280}}>Section</Text>
            <View style={styles.section}> 
                    <DropDownPicker
                        items={items}
                        defaultValue={selectedValue}
                        style={{ height: 10, width: 220, margin: 10, borderWidth: 1, marginLeft: 20, borderColor: 'grey' }}
                        onChangeItem={item=>setSelectedValue(item.value)}
                    />
                      <TextInput 
                            style={styles.secBox}
                            placeholder="e.g 4 / 2B"
                    />
            </View>

            <AppButton title= "Submit" />

        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#006C67',
        height: 150,
    },
    wrapper: {
        backgroundColor: "#FFFFFF",
        margin: 12,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        height: 650,
        paddingTop: 15,
    },
    nameInput: {
        margin: 10,
        borderWidth: 1,
        width: 330,
        padding: 10,
        borderRadius: 9,
        borderColor: 'grey',
    },
    emailInput: {
        margin: 10,
        borderWidth: 1,
        width: 330,
        padding: 10,
        borderRadius: 9,
        borderColor: 'grey',
    },
    PassInput: {
        margin: 10,
        borderWidth: 1,
        width: 330,
        padding: 10,
        borderRadius: 9,
        borderColor: 'grey',
    },
    InputBox: {
        margin: 10,
        borderWidth: 1,
        width: 330,
        padding: 10,
        borderRadius: 9,
        borderColor: 'grey',
    },
    secBox: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        borderRadius: 9,
        borderColor: 'grey',
        marginRight: 20,
    },
    section: {
        flexDirection: 'row',
    },
})

export default SignUpScreen;

