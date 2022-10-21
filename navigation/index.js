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
    </Stack.Navigator>
  );
}

export default MyStack;
