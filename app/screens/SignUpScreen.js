import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './AppButton';
import { useNavigation } from 'expo-router';

function SignUpScreen() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigation();

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const user = {
      name,
      email,
      password,
      Address: []
    };

    try {
      const res = await fetch('http://localhost:8080/sign-up/add/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem("userId", data.id);
        Alert.alert('User added successfully');
        setName('');
        setEmail('');
        setPassword('');
        navigate("./AddAddress");
        
      } else {
        throw new Error('Network response was not okay');
      }
    } catch (error) {
      console.error('Fetch error', error);
      Alert.alert('An error occurred while registering the user');
    }
  };

  const items = [
    { label: 'extension', value: '1' },
    { label: 'phase', value: '2' },
    { label: 'unit', value: '3' },
    { label: 'block', value: '4' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Sign Up</Text>
        <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 10 }}>Register with</Text>

        <View style={{ flexDirection: 'row', gap: 7, marginTop: 10, marginBottom: 10 }}>
          <TouchableOpacity>
            <Icon name="google" size={20} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="facebook" size={20} />
          </TouchableOpacity>
        </View>

        <Text>or</Text>
        <View>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder='Name'
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder='Email'
            keyboardType='email-address'
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
          />

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
              style={{ height: 40, width: 220, margin: 10, borderWidth: 1, marginLeft: 20, borderColor: 'grey' }}
            />
            <TextInput
              style={styles.secBox}
              placeholder="e.g 4 / 2B"
            />
          </View>

          <AppButton onPress={handleSubmit}  title="Submit" />
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
    margin: 10,
    padding: 10,
    borderRadius: 9,
    borderColor: 'grey',
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUpScreen;
