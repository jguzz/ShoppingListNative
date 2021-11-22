//Main components... All other components will be under APP.
import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';

//UUID for id generation
//import {uuid} from 'uuidv4';

//Components 
import Header from "./components/Header";

const App = () => {
  const [items, setItems] = useState([
    {id: Math.round(), text: 'Milk'},
    {id: Math.round(), text: 'Eggs'},
    {id: Math.round(), text: 'Yogurt'},
    {id: Math.round(), text: 'Cheese'},
  ]);

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
    </View>
  );
};

//Styles for App.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;

