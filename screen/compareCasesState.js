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
  FlatList,
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

const CompareCasesState = ({ navigation }) => {
  const [pieTotal, setPieTotal] = useState([]);
  let today = new Date();
  let date = today.getFullYear();

  let allEmergencyData = [];

  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = (item) => {
    setSelectedItem(item);
    console.log(item.year, "iyemtt");
    firebase
      .firestore()
      .collection("EmergencyReport")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          allEmergencyData.push(documentSnapshot.data());
        });

        let fireCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let floodCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        let dictOfFloodCasesCount = {};
        let dictOfFireCasesCount = {};
        let listOfDictOfFloodCasesCount = [];
        let listOfDictOfFireCasesCount = [];
        let finalResult = {};

        let states = [
          "Johor",
          "Kedah",
          "Kelantan",
          "Malacca",
          "Negeri Sembilan",
          "Pahang",
          "Penang",
          "Perak",
          "Perlis",
          "Sabah",
          "Sarawak",
          "Selangor",
          "Terangganu",
          "Kuala Lumpur",
          "Labuan",
          "Putrajaya",
        ];
        let formattedState = [];

        for (let key in allEmergencyData) {
          let year = allEmergencyData[key].date.slice(0, 4);
          let address = allEmergencyData[key].address;
          let reasonData = allEmergencyData[key].reason;
          let newAddress = address.replace(/[,.]/g, "");
          let newReason = reasonData.replace(/[,.]/g, "");
          let formatAddress = newAddress.toLowerCase();
          let formatReasonData = newReason.toLowerCase();

          for (let state in states) {
            let formatState = states[state].toLowerCase();
            formattedState.push(formatState);

            if (
              formatAddress.includes(formatState) &&
              formatReasonData.includes("fire") &&
              year == item.year
            ) {
              let indexSelected = formattedState.indexOf(formatState);
              fireCount[indexSelected] += 1;
            } else if (
              formatAddress.includes(formatState) &&
              formatReasonData.includes("flood") &&
              year == item.year
            ) {
              let indexSelected = formattedState.indexOf(formatState);
              floodCount[indexSelected] += 1;
            }
          }

          for (let a in states) {
            dictOfFloodCasesCount["x"] = states[a];
            dictOfFloodCasesCount["y"] = floodCount[a];
            dictOfFireCasesCount["x"] = states[a];
            dictOfFireCasesCount["y"] = fireCount[a];
            listOfDictOfFloodCasesCount.push(dictOfFloodCasesCount);
            listOfDictOfFireCasesCount.push(dictOfFireCasesCount);
            dictOfFloodCasesCount = {};
            dictOfFireCasesCount = {};
          }
        }

        finalResult["Flood"] = listOfDictOfFloodCasesCount;
        finalResult["Fire"] = listOfDictOfFireCasesCount;
        setPieTotal(finalResult);
      });
  };

  return (
    <View styles={styles.container}>
      <DropDown value={selectedItem} data={years} onSelect={onSelect} />
      <Text style={styles.title}>Number of Cases Per State</Text>

      <View style={styles.container_1}>
        <ScrollView horizontal style={styles.scrollView}>
          <ScrollView>
            <View style={styles.chart}>
              <VictoryChart
                theme={VictoryTheme.material}
                height={340}
                width={1700}
              >
                <VictoryAxis
                  label="Month"
                  axisLabelComponent={<VictoryLabel dy={40} />}
                />
                <VictoryAxis
                  tickFormat={(t) => (Number.isInteger(t) ? t : null)}
                  dependentAxis
                  axisLabelComponent={<VictoryLabel dy={-30} />}
                  label="Total Number of Cases"
                  style={{ padding: "50px" }}
                />
                <VictoryGroup offset={16}>
                  <VictoryBar
                    data={pieTotal.Flood}
                    events={[
                      {
                        target: "data",
                        eventHandlers: {
                          onPress: () => {
                            return [
                              {
                                target: "labels",
                                mutation: (props) => {
                                  console.log("-----------");
                                  console.log("text: ", props);
                                  console.log("text: ", props.datum["x"]);
                                },
                              },
                            ];
                          },
                        },
                      },
                    ]}
                    barWidth={15}
                    style={{
                      data: { fill: "orange" },
                      labels: { display: "none" },
                    }}
                  />

                  <VictoryBar
                    data={pieTotal.Fire}
                    events={[
                      {
                        target: "data",
                        eventHandlers: {
                          onPress: () => {
                            return [
                              {
                                target: "labels",
                                mutation: (props) => {
                                  console.log("-----------");
                                  console.log("text: ", props);
                                  console.log("text: ", props.datum["x"]);
                                },
                              },
                            ];
                          },
                        },
                      },
                    ]}
                    barWidth={15}
                    style={{
                      data: { fill: "black" },
                      labels: { display: "none" },
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
            </View>
          </ScrollView>
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("PieChart")}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DistrictPieFire")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompareCasesState;
const styles = StyleSheet.create({
  container: {
    // padding:12,
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
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
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  calender_box: {
    margin: 20,
    flex: 1,
    // backgroundColor:"dodgerblue",
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
    height: 410,
    alignSelf: "center",
    elevation: 3,
  },
});
