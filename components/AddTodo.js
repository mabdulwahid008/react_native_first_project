import React, { useState } from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

export const AddTodo = ( { submitHandler }) => {
    const [text, setText] = useState('')
    const changeHndler = (val) => {
        setText(val)
    }
  return (
    <View>
        <TextInput 
        value={text}
        style={styles.input}
        placeholder='New todo...' 
        onChangeText={changeHndler}
        />
        <Button onPress={()=>{submitHandler(text); setText("")}} title="Add Todo" color="coral"/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
