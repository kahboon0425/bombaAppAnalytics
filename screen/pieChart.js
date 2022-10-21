import React, { useState, useEffect } from "react";
import {
  Victory,
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryPie,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
  Border,
} from "victory-native";

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { firebase } from "../config";
import DropDown from "./dropDown";
let years = [
  {
    id: 1,
    year: "2022",
  },
  {
    id: 2,
    year: "2023",
  },
  {
    id: 3,
    year: "2024",
  },
  {
    id: 4,
    year: "2025",
  },
  {
    id: 5,
    year: "2026",
  },
  {
    id: 6,
    year: "2027",
  },
  {
    id: 7,
    year: "2028",
  },
  {
    id: 8,
    year: "2029",
  },
  {
    id: 9,
    year: "2030",
  },
];

const PieChart = ({ navigation }) => {
  const [pieTotal, setPieTotal] = useState([]);

  let allEmergencyData = [];

  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = (item) => {
    setSelectedItem(item);
    firebase
      .firestore()
      .collection("EmergencyReport")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          allEmergencyData.push(documentSnapshot.data());
        });
        let countOfFlood = 0;
        let countOfFire = 0;
        let dictOfFloodCases = {};
        let dictOfFireCases = {};
        const totalCasesGraph = {};
        let dictOfCasesList = [];
        for (const key in allEmergencyData) {
          let reasonData = allEmergencyData[key].reason;
          let year = allEmergencyData[key].date.slice(0, 4);
          if (reasonData === "flood" && year == item.year) {
            countOfFlood += 1;
          }
          if (reasonData === "fire" && year == item.year) {
            countOfFire += 1;
          }
        }
        dictOfFloodCases["x"] = "Flood";
        dictOfFloodCases["y"] = countOfFlood;
        dictOfFireCases["x"] = "Fire";
        dictOfFireCases["y"] = countOfFire;
        dictOfCasesList.push(dictOfFloodCases);
        dictOfCasesList.push(dictOfFireCases);
        totalCasesGraph["TotalCases"] = dictOfCasesList;
        setPieTotal(totalCasesGraph);
      });
  };

  return (
    <View styles={styles.container}>
      <DropDown value={selectedItem} data={years} onSelect={onSelect} />
      <View>
        <Text style={styles.top}>Total Number of Flood and Fire Cases</Text>
      </View>

      <View style={styles.container_1}>
        <View style={styles.legend_container}>
          <VictoryLegend
            gutter={20}
            data={[
              {
                name: "Flood Cases",
                symbol: {
                  fill: "orange",
                },
              },
              {
                name: "Fire Cases",
                symbol: {
                  fill: "black",
                },
              },
            ]}
          />
        </View>
        <View style={styles.container_2}>
          <VictoryPie
            height={350}
            alignItems="left"
            colorScale={["orange", "black"]}
            data={pieTotal.TotalCases}
            labels={({ datum }) => `${datum.y}`}
          ></VictoryPie>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("NewBarChart")}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CompareCasesState")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  top: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  bottom: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  calender_box: {
    margin: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },
  container_1: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    paddingTop: 30,
    height: 400,
    alignSelf: "center",
    elevation: 3,
    width: 330,
  },
  container_2: {
    alignItems: "center",
    justifyContent: "center",
  },
  legend_container: {
    flex: 1,
    width: 50,
    height: 50,
  },
});
