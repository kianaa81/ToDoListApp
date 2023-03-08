import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
class App extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
          <Text>
              Hello
              How are you?
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        backGroundColor: '#ddd',
        flex: 1,
    }
});

export default App;