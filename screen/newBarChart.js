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
  Image,
} from "react-native";
import { firebase } from "../config";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Colors, DebugInstructions } from "react-native/Libraries/NewAppScreen";
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

const NewBarChart = ({ navigation }) => {
  let today = new Date();
  let date = today.getFullYear();

  const [casesList, setCasesList] = useState([]);
  const [useDate, setDate] = useState();

  const monthlyCasesGraph = {};

  let allEmergencyData = [];

  const getEmergencyData = () => {
    const data = [];
    firebase
      .firestore()
      .collection("EmergencyReport")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          data.push(documentSnapshot.data());
          console.log(documentSnapshot.data(), "herehere");
        });
        console.log(data, "okok");
      });
    return data;
  };

  const filterData = (allEmergencyData) => {
    let countFireCases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let countFloodCases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let allMonth = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let monthDigit = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let monthlyFloodCases = {};
    let monthlyFireCases = {};
    let monthlyCasesFloodList = [];
    let monthlyCasesFireList = [];

    for (const key in allEmergencyData) {
      let reasonData = allEmergencyData[key].reason;
      let newReason = reasonData.replace(/[,.]/g, "");
      let formatReasonData = newReason.toLowerCase();
      let month = allEmergencyData[key].date.slice(5, 7);
      let year = allEmergencyData[key].date.slice(0, 4);

      for (let m in monthDigit) {
        if (month === monthDigit[m] && year == date) {
          let indexSelected = monthDigit.indexOf(month);
          if (formatReasonData.includes("flood")) {
            countFloodCases[indexSelected] += 1;
          } else if (formatReasonData.includes("fire")) {
            countFireCases[indexSelected] += 1;
          }
        }
      }
    }

    for (let c in allMonth) {
      monthlyFloodCases["x"] = allMonth[c];
      monthlyFloodCases["y"] = countFloodCases[c];
      monthlyCasesFloodList.push(monthlyFloodCases);
      monthlyFloodCases = {};
      monthlyFireCases["x"] = allMonth[c];
      monthlyFireCases["y"] = countFireCases[c];
      monthlyCasesFireList.push(monthlyFireCases);
      monthlyFireCases = {};
    }

    monthlyCasesGraph["Flood"] = monthlyCasesFloodList;
    monthlyCasesGraph["Fire"] = monthlyCasesFireList;
    setCasesList(monthlyCasesGraph);
  };

  useEffect(() => {
    const emergencyData = getEmergencyData();
    console.log(emergencyData, "helohelo");
    filterData(emergencyData);
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = (item) => {
    setSelectedItem(item);
    console.log(item.year, "iyemtt");
    setDate(item.year);
    let allEmergencyData = [];

    firebase
      .firestore()
      .collection("EmergencyReport")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          allEmergencyData.push(documentSnapshot.data());
        });

        let countFireCases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let countFloodCases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let allMonth = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let monthDigit = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
        let monthlyFloodCases = {};
        let monthlyFireCases = {};
        let monthlyCasesFloodList = [];
        let monthlyCasesFireList = [];
        let finalFireResult = {};
        let finalFloodResult = {};

        for (const key in allEmergencyData) {
          let reasonData = allEmergencyData[key].reason;
          let newReason = reasonData.replace(/[,.]/g, "");
          let formatReasonData = newReason.toLowerCase();
          let month = allEmergencyData[key].date.slice(5, 7);
          let year = allEmergencyData[key].date.slice(0, 4);

          for (let m in monthDigit) {
            if (month === monthDigit[m] && year == item.year) {
              let indexSelected = monthDigit.indexOf(month);
              if (formatReasonData.includes("flood")) {
                countFloodCases[indexSelected] += 1;
              } else if (formatReasonData.includes("fire")) {
                countFireCases[indexSelected] += 1;
              }
            }
          }
        }

        for (let c in allMonth) {
          monthlyFloodCases["x"] = allMonth[c];
          monthlyFloodCases["y"] = countFloodCases[c];
          monthlyCasesFloodList.push(monthlyFloodCases);
          monthlyFloodCases = {};
          monthlyFireCases["x"] = allMonth[c];
          monthlyFireCases["y"] = countFireCases[c];
          monthlyCasesFireList.push(monthlyFireCases);
          monthlyFireCases = {};
        }

        monthlyCasesGraph["Flood"] = monthlyCasesFloodList;
        monthlyCasesGraph["Fire"] = monthlyCasesFireList;

        setCasesList(monthlyCasesGraph, "eeeee");
      });
  };
  useEffect(() => {
    console.log(allEmergencyData, "ooooooooooo");
  }, [allEmergencyData]);

  return (
    <View styles={styles.container}>
      <View styles={{ width: 80, height: 100 }}>
        <DropDown value={selectedItem} data={years} onSelect={onSelect} />
      </View>
      <Text style={styles.title}>Total Number of Cases Per Month</Text>

      <View style={styles.container_1}>
        <ScrollView horizontal style={styles.scrollView}>
          <ScrollView>
            <VictoryChart
              theme={VictoryTheme.material}
              height={350}
              width={800}
            >
              <VictoryAxis
                label="Month"
                axisLabelComponent={<VictoryLabel dy={30} />}
                style={{ padding: "100px" }}
              />
              <VictoryAxis
                tickFormat={(t) => (Number.isInteger(t) ? t : null)}
                dependentAxis
                axisLabelComponent={<VictoryLabel dy={-30} />}
                label="Total Number of Cases"
                style={{ padding: "50px" }}
              />
              <VictoryGroup offset={12}>
                <VictoryBar
                  barWidth={10}
                  animate
                  data={casesList.Flood}
                  style={{
                    data: { fill: "orange" },
                  }}
                />
                <VictoryBar
                  barWidth={10}
                  animate
                  data={casesList.Fire}
                  style={{
                    data: { fill: "black" },
                  }}
                />
              </VictoryGroup>
              <VictoryLegend
                x={Dimensions.get("screen").width / 2 - 100}
                orientation="horizontal"
                y={2}
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
            </VictoryChart>
          </ScrollView>
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PieChart")}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewBarChart;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 10,
  },
  top: {
    height: 100,
    marginTop: 40,
    alignSelf: "center",
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
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    paddingTop: 30,
    height: 400,
    alignSelf: "center",
    elevation: 3,
  },
});
