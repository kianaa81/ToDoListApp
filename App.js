import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
class App extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <Text>
              Hello
              How are you?
          </Text>
          </ScrollView>
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