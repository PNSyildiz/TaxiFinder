import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text } from 'react-native';

function AppButton({ title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#006C67',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 130,
        marginLeft: 20,
        
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    }
})

export default AppButton;
