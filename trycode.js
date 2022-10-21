import React, { useState, useEffect } from 'react';
import {View,StyleSheet,TouchableOpacity,Text, Modal} from 'react-native';
import { Button } from 'react-native'
import axios from 'axios';
import {VictoryChart, VictoryGroup,VictoryBar} from "victory-native";


export async function Chart(){
    
    //  get back an object (premises)
    const response = await axios.get("https://bombaapp-35cc5-default-rtdb.firebaseio.com/EmergencyReport.json").catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    }
    for(const key in response.data){
        // console.log(key);
        let reasonData = response.data[key].reason;
        let date = response.data[key].date;

        if(userInput == date){
            <View>
            <ScrollView horizontal style={styles.scrollView}>
         
        <Modal visible = {showGraph} animationType="fade">

          <SafeAreaView style = {styles.container_1} >
          <ScrollView horizontal style={styles.scrollView}>
          <ScrollView>
          <View style = {styles.calender_box}>
          <TouchableOpacity 
            onPress ={calender_x} 
            style={{
              backgroundColor:'black',
              borderRadius:10,
              margin:40,
              padding:10,
              width:200,
              alignItems:'center'
              }}>
              <Text style={{color:'white',fontSize:22}}>Show Calender</Text>
            </TouchableOpacity>
            <Modal visible = {showCalender} animationType="fade">
            <Calendar style={{borderRadius:10, elevation:4,margin:40}}
          onDayPress = {date=>{
            console.log(date)
            setShowCalender(false)
            
            }}
            initialDate={'2022-09-01'}
            />
        </Modal>
              
           
              </View>

          <Text style={[
                { fill: "red", fontSize: 16 ,paddingTop:30}]}>
                  Total Number of Cases Per Month
          </Text>
          <VictoryChart theme={VictoryTheme.material} height={250} width={800} >

              <VictoryAxis label="Month" axisLabelComponent={<VictoryLabel dy={30} />} style={{ padding: "100px" }}/>
              <VictoryAxis
                // tickValues={[1, 2, 3, 4,5]}
                dependentAxis
                axisLabelComponent={<VictoryLabel dy={-30} />}
                label="Total Number of Cases"
                style={{ padding: "50px" }}/>
              <VictoryGroup offset={12} >
              {/* labels={({ datum }) => `y: ${datum.y}`} */}
      
                  <VictoryBar  barWidth={10} animate data={count.Flood} style={{
                    data:{fill:'orange'}
                  }}/>
                  <VictoryBar barWidth={10} animate data={count.Fire} style={{
                    data:{fill:'black'}
                  }}/>
        
              </VictoryGroup>
              <VictoryLegend
                x={Dimensions.get('screen').width/2-100}
                orientation='horizontal'
                y={5}
                gutter={20}
                data={[{
                  name: "Flood Cases",
                  symbol:{
                    fill:'orange'
                  }
                },
                {
                  name: "Fire Cases",
                  symbol:{
                  fill:'black'
                }
                }]}
              />

          
            
          </VictoryChart>
          <View style = {styles.container_2} >
        
       
        <VictoryLegend standalone={true}
        
          width={400} height={200}
          colorScale={["black", "orange"]}
          x={20} y={50}
          gutter={20}
          title="Legend"
          centerTitle
          style={{ border: { stroke: "black" } }}
          data={legendData}
        />
        
        <VictoryPie standalone={true}
          // width={300} height={200}
          
          padding={{ 
          	left: 100, bottom: 50, top: 20
          }}
          alignItems='left'
          paddingTop={0}
          colorScale={["orange", "black"]}
          data={pieTotal.TotalCases}
          labels={({ datum }) => `${datum.y}`}
        >
          
        </VictoryPie>
          
        </View>
          
        </ScrollView>
        </ScrollView>
        
        </SafeAreaView>
        

        
        </Modal>
        </ScrollView>
        </View>

        }

        }
    