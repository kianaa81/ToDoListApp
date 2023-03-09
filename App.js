import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);


    return (
      <View style={styles.container}>
        <ScrollView >
        <Text>Count: {count}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
          </ScrollView>
      </View>
    );
  };


const styles = StyleSheet.create({
    container : {
        backGroundColor: '#ddd',
        flex: 1,
    },
});

export default App;