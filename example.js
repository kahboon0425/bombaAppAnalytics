// import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { Button } from 'react-native'
import axios from 'axios';

function App(){
  // const number = 'abc';
  // console.log(number);
  function print(){
    const a ="apple";
    console.log(a);
  }
  async function fetchExpenses(){
    //  get back an object (premises)
    const response = await axios.get("https://bombaapp-35cc5-default-rtdb.firebaseio.com/expenses.json").catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
        console.log(response.data);
        for(const key in response.data){
          console.log(response.data[key].amount);
        }
      }
  return(
    <View>
      <Button title='update state' onPress = {fetchExpenses}/>

    </View>
  )

}

export default App;