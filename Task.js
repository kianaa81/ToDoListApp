import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
const Task = (props) => {

   return (
   <ScrollView >
      <View style = {styles.item}>
          <View style={styles.itemLeft}>
            <TouchableOpacity style = {styles.square}>
              <Text style = {styles.itemLeft}>{props.text}</Text>
            </TouchableOpacity>
          </View>
         <View style= {styles.circular}>

         </View>
      </View>
    </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
    itemLeft: {

    },
    square: {

    },
    itemText: {

    },
    circular: {

    }
  });

export default Task;
