import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import { THEME } from "../theme";
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')


    const presHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
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
            <AntDesign.Button onPress={presHandler} name='pluscircleo'>
                Add
            </AntDesign.Button>
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
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    }
})
