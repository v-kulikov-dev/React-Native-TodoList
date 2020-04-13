import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')



    const presHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Empty text')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter your todo"
                autoCorrect={false}
                autoCapialize='none'
            />
            <Button title='Add' onPress={presHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
})
