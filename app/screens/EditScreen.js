import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';

function EditScreen() {
    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        { label: 'extension', value: '1'},
        { label: 'phase', value: '2'},
        { label: 'unit', value: '3'},
        { label: 'block', value: '4'},
    ];

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
              <Icon name='arrow-left' size={25}/>
            </TouchableOpacity>
            
            <Text style={{fontSize: 20, fontWeight: '700', marginLeft: 110}}>Edit Profile</Text>
        </View>

        <Text style={styles.circleInitials}>KK</Text>

        <View style={styles.wrapper}>
            <TextInput style={styles.wrapperName}>Kabelo Kgoadi</TextInput>
            <TextInput style={styles.wrapperEmail}>ksrkgoadi@gmail.com</TextInput>

            <Text style={{marginTop: 10, marginRight: 190}}>Town/Township/City</Text>
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
                        style={{ height: 10, width: 220, margin: 10, borderWidth: 1, marginLeft: 25, borderColor: 'grey' }}
                        onChangeItem={item=>setSelectedValue(item.value)}
                    />
                      <TextInput 
                            style={styles.secBox}
                            placeholder="e.g 4 / 2B"
                    />
            </View>

            <AppButton title= "Save"/>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
        paddingTop: 40,
        backgroundColor: "#006C67",
        // justifyContent: 'center',
        alignItems: 'center',
        height: 290,
      },
      header: {
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 15,
      },
      circleInitials: {
        borderRadius: 100,
        width: 90,
        padding: 30,
        margin: 25,
        backgroundColor: "#FFFFFF",
        fontSize: 20,
        fontWeight: '700',
    },  
    wrapper: {
        margin: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
        height: 650,
        paddingTop: 20,
        alignItems: 'center'
     },
     wrapperName: {
        margin: 10,
        borderWidth: 1,
        width: 330,
        padding: 10,
        borderRadius: 9,
        borderColor: 'grey',
     },
     wrapperEmail: {
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
        marginRight: 25,
    },
    section: {
        flexDirection: 'row',
    },
})

export default EditScreen;
