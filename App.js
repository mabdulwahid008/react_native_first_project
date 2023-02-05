import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {name: "hello world", id:1},
    {name: "hello world", id:2},
    {name: "hello world", id:3},
    {name: "hello world", id:4},
    {name: "hello world", id:5},
  ])

  const pressHandler = (id) => {
    setTodos((prevTodos)=> {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3){
        setTodos((prevTodos)=>{
        return [{name: text, id: Math.random().toString()} , ...prevTodos]
        })
    }
    else
      Alert.alert('Oops!', 'Todo must be greater than 3 chars', [
      {text: 'Understood', onPress: ()=>{}}
    ])
  }
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>

          <AddTodo submitHandler={submitHandler}/>

          <View style={styles.list}>
            <FlatList data={todos} renderItem={({ item }) => {
              return <TodoItem item={item} pressHandler={pressHandler}/>
            }}/>
          </View>

      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
