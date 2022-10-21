// import React from 'react';
import * as React from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Title from '../components/title';

const Home=({navigation})=>{
  
  return(
    <View style={styles.container}>
      <Title />
      <TouchableOpacity onPress={()=>navigation.navigate("NewBarChart")}>
        <Text>Statistics</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    paddingHorizontal:16,
  }
})