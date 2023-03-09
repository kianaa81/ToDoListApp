import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
const App = () => {

   return (
      <View style={styles.container}>
        <ScrollView >
          <View style = {styles.taskWrapper}>
            <Text>Add to your list</Text>
          </View>
      
          </ScrollView>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});

export default App;