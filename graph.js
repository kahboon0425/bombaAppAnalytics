const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [],
      },
    ],
  };

<BarChart
// style={graphStyle}
data={barData}
width={screenWidth}
height={220}
yAxisLabel={ }
chartConfig={chartConfig}
/>

// // import React, { useState, useEffect } from 'react';
// import { View} from 'react-native';
// import { Button } from 'react-native'
// import axios from 'axios';
// import calender from './calender';

// // const EmergencyReport = {
// //   requestNumber: "A001",
// //   reason: "flood",
// //   address: "Parkhill Residence, Bukit jalil",
// //   victim: ["Ali","ABU","James"],
// // };
// // storeExpense(EmergencyReport);
// // export function storeExpense(EmergencyReport) {
// //     axios.post("https://bombaapp-35cc5-default-rtdb.firebaseio.com/EmergencyReport.json",EmergencyReport);
// // }

// function App(){
  
//   async function fetchExpenses(){
//     //  get back an object (premises)
//     const response = await axios.get("https://bombaapp-35cc5-default-rtdb.firebaseio.com/EmergencyReport.json").catch(function(error) {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//          // ADD THIS THROW error
//           throw error;
//         });
//         console.log(response.data);
//         const reason = [];
//         const address =[];
//         for(const key in response.data){
//           console.log(response.data[key].reason);
//           reason.push(response.data[key].reason);
//           address.push(response.data[key].address);
//         }
//         console.log(reason);
//         console.log(address);
//       }
//   return(
//     <View>
//       <Button title='update state' onPress = {fetchExpenses}/>

//     </View>
//   )

// }

// // export default App;
// -------------------------------------------------
// calender
// import React from "react";
// // import ReactDOM from "react-dom";
// import { useState, useEffect } from 'react';
// import { Calendar } from "react-native-calendars";
// import {View,StyleSheet,TouchableOpacity,Text, Modal} from 'react-native';

// function App() {
//   const [showModal,setShowModal] = useState(false);
//   return (
//     <View>
//       <TouchableOpacity 
//         onPress ={()=> setShowModal(true)} 
//         style={{
//           backgroundColor:'black',
//           borderRadius:10,
//           margin:40,
//           padding:10,
//           width:200,
//           alignItems:'center'
//           }}>
//           <Text style={{color:'white',fontSize:22}}>Show Calender</Text>
//         </TouchableOpacity>
//         <Modal visible = {showModal} animationType="fade">
//           <Calendar style={{borderRadius:10, elevation:4,margin:40}}
//           onDayPress = {date=>{
//             console.log(date)
//             setShowModal(false)
//             }}
//             initialDate={'2022-09-01'}
//             />
//         </Modal>
//     </View>
//   );
// }
// export default App;
// // 
// -----------------------------------------------------
// import React from "react";
// // import ReactDOM from "react-dom";
// import { Calendar } from "react-native-calendars";
// import {View,StyleSheet,TouchableOpacity,Text, Modal} from 'react-native';

// // import "./styles.css";

// function App() {
//   return (
//     <View >
//       <Calendar
        
//       />
//     </View>
//   );
// }

// // const rootElement = document.getElementById("root");
// export default App;


// --------------------------------------------------------------------
// Date 
import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { Button } from 'react-native'

let yearThisYear = "";
export default function App() {
  let today = new Date();
  let date = today.getFullYear();
  console.log(date);
  yearThisYear = date;
  console.log("hello"+yearThisYear);

  return(
      <View>
        <Button title='update state' onPress = {App}/>
        <Button title='update state' onPress = {App}/>

      </View>
      )

}