// import { TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';

function Calender(){
    // const [showModal,setShowModal]
    return (
        <View>
            <TouchableOpacity style={{backgroundColor:'black',borderRadius:10,margin:40,padding:10,width:200,alignItems:'center'}}>
            <Text style={{color:'white',fontSize:22}}>Show Calender</Text>
            </TouchableOpacity>
        </View>
    );
    
}
const styles = StyleSheet.create({})
// Calender;