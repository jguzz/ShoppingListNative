//Main components... All other components will be under APP.
import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

//UUID for id generation
import uuid from 'react-native-uuid';

//Components 
import Header from "./components/Header";
import ListItem from "./components/ListItem";

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Yogurt'},
    {id: uuid.v4(), text: 'Cheese'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList
       data={items}
       renderItem={({item}) => (
         <ListItem item={item} deleteItem={deleteItem}/>
       )}
      //keyExtractor={item => item.id}
      />
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

