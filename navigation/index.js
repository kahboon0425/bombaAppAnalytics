import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import PieChart from "../screen/pieChart";
import * as React from "react";
import NewBarChart from "../screen/newBarChart";
import DistrictPieFire from "../screen/DistrictPieFire";
import CompareCasesState from "../screen/compareCasesState";
import DistrictPieFlood from "../screen/DistrictPieFlood";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewBarChart"
        component={NewBarChart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PieChart"
        component={PieChart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompareCasesState"
        component={CompareCasesState}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DistrictPieFire"
        component={DistrictPieFire}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DistrictPieFlood"
        component={DistrictPieFlood}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen name="DonutChartFire" component={DonutChartFire} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="DonutChartFlood" component={DonutChartFlood} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="CompareStateCases" component={CompareStateCases} options={{headerShown:false}}/> */}

      {/* <Stack.Screen name="DistrictPieFire" component={DistrictPieFire} options={{headerShown:false}}/> */}

      {/* <Stack.Screen name="FetchData" component={FetchData} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="DistrictOfAreaVersion2" component={DistrictOfAreaVersion2} options={{headerShown:false}}/> */}

      {/* ------------------------------ */}
      {/* <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="NewBarChart" component={NewBarChart} options={{headerShown:false}}/>
            {/* <Stack.Screen name="NewCalender" component={NewCalender} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="Try" component={Try} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="BarChart" component={BarChart} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="PieChart" component={PieChart} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="DistrictOfArea" component={DistrictOfArea} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="HolePieChartFlood" component={HolePieChartFlood} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="DonutChartFire" component={DonutChartFire} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="DonutChartFlood" component={DonutChartFlood} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="HolePieChartFire" component={HolePieChartFire} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="CompareStateCases" component={CompareStateCases} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="PieCompare" component={PieCompare} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="BarChartEvent" component={BarChartEvent} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="Calender" component={Calender} options={{headerShown:false}}/> */}
    </Stack.Navigator>
  );
}

export default MyStack;
