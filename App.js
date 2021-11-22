//Main components... All other components will be under APP.
import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';

//UUID for id generation
import uuid from 'react-native-uuid';

//Components 
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  //Items an array of objects used to track shopping list items.
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Yogurt'},
    {id: uuid.v4(), text: 'Cheese'},
  ]);

  // Used to delete an item, based on id, from the items [{}]
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  //Used to add items to the items[{}] state.
  const addItem = (text) => {
    if(!text) {
      Alert.alert('No Item Was Entered', 'Please enter an item!', {text: 'Ok'});
    }else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
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

