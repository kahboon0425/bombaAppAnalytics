
import React, { useState, useEffect } from 'react';
import { Image,Dimensions, StyleSheet, Text, View,SafeAreaView,ScrollView, TouchableOpacity,Modal} from "react-native";
import {firebase} from '../config';
import imagesPath from '../constants/imagesPath';



const DropDown =({
    data=[],
    value={},
    onSelect=()=>{}
})=>{
    console.log("selected value",!!value)
    const [showOption,setShowOption] = useState(false)
    const onSelectedItem = (val)=>{
        setShowOption(false)
        onSelect(val)

    }
    return (
        
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.dropDownStyle}
            activeOpacity={0.8}
            onPress={()=>setShowOption(!showOption)}>
                <Text>{!!value? value?.year: `Year`}</Text>
                <Image style={{
                    transform: [{rotate:showOption? '180deg':'0deg'}]
                }} source={imagesPath.dropDownArrow}/>
            </TouchableOpacity>
            {showOption && (<View style={{
                width:130,
                padding:5,
                backgroundColor:'#DDDDDD',
                borderRadius:6,
                height:60,
                }}>
            <ScrollView>
            {data.map((val,i)=>{
                return(
                    <TouchableOpacity 
                    key={String(i)}
                    onPress = {()=>onSelectedItem(val)}
                    style={{
                        height:40,
                        backgroundColor:'white',
                        paddingVertical:8,
                        borderRadius:4,
                        paddingHorizontal:40,
                        marginTop: 3,
                    }}>
                    <Text key={String(i)}>{val.year}</Text>
                    </TouchableOpacity>
                )
            })}
            </ScrollView>
        </View>)}
        </View>
    )
}
export default DropDown

const styles = StyleSheet.create({
    dropDownStyle:{
        backgroundColor:'#DDDDDD',
        paddingRight:8,
        paddingLeft:8,
        // paddingBottom:1,
        borderRadius:6,
        height:30,
        justifyContent:'space-between',
        width:100,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:6,

       
    },
    container:{
        // paddingTop:10,
        paddingBottom:20,
        height:70,
        // height:100,
        marginTop:40,
        marginBottom:10,
        marginLeft:20,
        // alignSelf:'center'
        // paddingLeft:10,
        // backgroundColor:"white"
        // zIndex: 3,
        
        
    },
})