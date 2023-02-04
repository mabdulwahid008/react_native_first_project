import {StyleSheet, TouchableOpacity, Text, } from 'react-native'

export const TodoItem = ({ item, pressHandler }) => {
    return(
        <TouchableOpacity onPress={()=>{pressHandler(item.id)}}>
            <Text style={style.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})