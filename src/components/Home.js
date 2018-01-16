import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      todoText: ''
    }
  }

  addTask() {
    const todos = [...this.state.todos, this.state.todoText]
    this.setState({todos, todoText: ''})
  }

  _todoTextChange(todoText){
    this.setState({todoText})
  }

  removeTodo(index) {
    const todos = this.state.todos.splice(index, 1)
    this.setState(todos)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            placeholder='new task'
            value={this.state.todoText}
            style={styles.textInput}
            onChangeText={this._todoTextChange.bind(this)}
          />
          <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) =>
            <TouchableOpacity key={i} style={styles.todo} onPress={this.removeTodo.bind(this, i)}>
              <Text style={styles.todoText}> x  {todo}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    marginTop: 100,
  },

  form: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: 'blue',
    marginLeft: 5,
    height: 40,
    width: 70,
    borderRadius: 3,
    justifyContent: 'center',
    padding: 5
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },

  textInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    padding: 5,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 3
  },

  todo: {
    borderBottomWidth: .5,
    borderColor: 'lightgray',
    marginTop: 10,
    marginBottom: 10
  },

  todoText: {
    fontSize: 20,
    marginBottom: 2
  },

  todos: {
    marginTop: 30,
  }
})
