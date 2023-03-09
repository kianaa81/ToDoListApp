import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './Task';

const App = () =>{
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState ([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems ([...taskItems, task])
    setTask(null);
  }
   return (
      <View style={styles.container}>
        <ScrollView >
          <View style = {styles.taskWrapper}>
            <Text style = {styles.sectionTitle}>Add to your list</Text>
          </View>
          <View style = {styles.items}>
            {
              taskItems.map((item, index) => {
               return <Task key={index} text={item}/>
              })
            }
          </View>
          </ScrollView>
          
          <TouchableOpacity onPress={() => handleAddTask() }>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity><TextInput style={styles.input} placeholder="Type here" value={task} onChangeText={ text => setTask(text)}/>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(197, 208, 219)',
    paddingHorizontal: 10,

  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
    marginLeft: 60,
    color: '#d87093'
  },
  items: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    marginBottom: 60
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'space-evenly',
    marginLeft: 300,
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {

  },
});

export default App;