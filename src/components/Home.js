import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View
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
      <View>
        <View style={{ margin: 35, marginTop: 100 }}>
          <TextInput
            placeholder='new task'
            value={this.state.todoText}
            style={{height: 40, width: 300, borderColor: 'gray', padding: 5, borderWidth: 1}}
            onChangeText={this._todoTextChange.bind(this)}
          />
          <Button title='Add' onPress={this.addTask.bind(this)}/>
        </View>
        <View style={{ margin: 35 }}>
          {this.state.todos.map((todo, i) =>
            <TouchableOpacity key={i} onPress={this.removeTodo.bind(this, i)}>
              <Text> x | {todo}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}
