import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import MyStack from './navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';



const App =()=>{
  return(
   
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  
  );
};
export default App;

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    paddingHorizontal:16,
  }
})