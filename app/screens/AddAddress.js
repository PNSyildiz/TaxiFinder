import React, {useState} from "react";
import {Text, ScrollView, View, StyleSheet, TextInput,TouchableOpacity, Alert} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';
import { useNavigation } from "expo-router";

function AddAddress() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [town, setTown] = useState('');
    const [area, setArea] = useState('');
    const [section, setSection] = useState('');

    const userId = localStorage.getItem("userId");
    const navigate = useNavigation();

    const handleSubmit = async () => {
        if (!town || !area || !section) {
          Alert.alert('Please fill in all fields');
          return;
        }
    
        const address = {
          town,
          area,
          section,
        };
    
        try {
          const res = await fetch('http://localhost:8080/sign-up/add/Address/${userId}', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(address),
          });
    
          if (res.ok) {
            const data = await res.json();
            sessionStorage.setItem("userId", data.id);
            Alert.alert('Address registered successfully');
           setArea('');
           setTown('');
           setSection('');
           navigate("./HomeScreen");
           
          } else {
            throw new Error('Network response was not okay');
          }
        } catch (error) {
          console.error('Fetch error', error);
          Alert.alert('An error occurred while adding the address');
        }
      };
 
    const items = [
        { label: 'extension', value: '1' },
        { label: 'phase', value: '2' },
        { label: 'unit', value: '3' },
        { label: 'block', value: '4' },
      ];

      return(
        <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
      <View>
      <Text style={{ marginTop: 10, marginRight: 195 }}>Town/Township/City</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g Soweto / Katlehong / Johannesburg"
          />
          <Text style={{ marginRight: 290 }}>Area</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g Diepkloof / Siluma / Braamfontein"
          />

          <Text style={{ marginRight: 280 }}>Section</Text>
          <View style={styles.section}>
            <DropDownPicker
              items={items}
              open={open}
              setOpen={setOpen}
              value={selectedValue}
              setValue={setSelectedValue}
              style={{ width: 220, marginLeft:-5, borderWidth: 1, marginLeft: 20, borderColor: 'grey' }}
            />
            <TextInput
              style={styles.secBox}
              placeholder="e.g 4 / 2B" />
            </View>
            <AppButton onPress={handleSubmit} title=" Save Address"/>
          </View>
      </View>
      </ScrollView>
      );
}

const styles = StyleSheet.create({

    container: {
      backgroundColor: '#006C67',
      flex: 1,
    },
    wrapper: {
      backgroundColor: "#FFFFFF",
      margin: 12,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9,
      padding: 15,
    },
    input: {
      margin: 10,
      borderWidth: 1,
      width: 330,
      padding: 10,
      borderRadius: 9,
      borderColor: 'grey',
    },
    secBox: {
      borderWidth: 1,
      marginLeft: -105,
      width: 5,
      padding: 5,
      borderRadius: 9,
      borderColor: 'grey',
      flex: 1,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  export default AddAddress;