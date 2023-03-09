import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Task from './Task';

const App = () => {

   return (
      <View style={styles.container}>
        <ScrollView >
          <View style = {styles.taskWrapper}>
            <Text style = {styles.sectionTitle}>Add to your list</Text>
          </View>
          <View style = {styles.items}>
            <Task text = {'Task 1'} />
          </View>
          </ScrollView>
          <TextInput style={styles.input} onChangeText={onChangeNumber} value={number} placeholder="useless placeholder" keyboardType="numeric"/>
          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Tex style={styles.addText}>+</Tex>
            </View>
          </TouchableOpacity>
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
  }
});

export default App;