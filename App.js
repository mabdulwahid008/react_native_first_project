import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useState, useEffect } from 'react'

export default function App() {
  const [first, setfirst] = useState('wahid')
  const people = [
    {title: "hello world", id:1},
    {title: "hello world", id:2},
    {title: "hello world", id:3},
    {title: "hello world", id:4},
    {title: "hello world", id:5},
    {title: "hello world", id:6},
    {title: "hello world", id:7},
    {title: "hello world", id:8},
    {title: "hello world", id:9},
  ]
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <FlatList
        data={people}
        renderItem={({ item }) => 
          <Text style={styles.list}>{item.title}</Text>
        }
      />
      <Text>Hello</Text>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20
  },
 list: {
   padding: 20,
   marginTop: 24,
   backgroundColor: 'pink',
   fontSize: 24,
 }
});
