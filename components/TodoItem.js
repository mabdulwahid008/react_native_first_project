import {StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export const TodoItem = ({ item, pressHandler }) => {
    return(
        <TouchableOpacity onPress={()=>{pressHandler(item.id)}}>
            <View style={style.item}>
                <MaterialIcons  name="delete" size={18} color="#333"/>
                <Text style={style.itmeText}>{item.name}</Text>
            </View>
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
        borderRadius: 10,
        flexDirection: 'row',
    },
    itmeText: {
        marginLeft: 20
    }
})