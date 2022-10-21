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

const DistrictPieFire = ({ navigation }) => {
  const [pieTotal, setPieTotal] = useState([]);
  const [countTotal, setcountTotal] = useState();
  const [stateSelected, setStateSelected] = useState("Select a state");
  const [yearSelected, setYear] = useState(null);
  let today = new Date();
  let date = today.getFullYear();

  let allEmergencyData = [];

  const [emergencyData, setEmergencyData] = useState([]);

  const [fireFlatList, setFireFlatList] = useState([]);
  function districtOfArea(stateSelected) {
    let testing = [];
    let allEmergencyData = [];

    firebase
      .firestore()
      .collection("EmergencyReport")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          allEmergencyData.push(documentSnapshot.data());
        });
        testing = allEmergencyData;
        // console.log('Data fetch: ', allEmergencyData);
        let myTry = "2022";
        setEmergencyData(allEmergencyData);

        let flatListDict = {};
        let listOfFlatDict = [];

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
        let listOfDistricts = [
          [
            "Batu Pahat",
            "Johor Bahru",
            "Kluang",
            "Kota Tinggi",
            "Kulai",
            "Mersing",
            "Muar",
            "Pontian",
            "Segamat",
            "Tangkak",
          ],
          [
            "Baling",
            "Bandar Baharu",
            "Kota Setar",
            "Kuala Muda",
            "Kubang Pasu",
            "Kulim",
            "Langkawi",
            "Padang Terap",
            "Pendang",
            "Pokok Sena",
            "Sik",
            "Yan",
          ],
          [
            "Kota Bharu",
            "Pasir Mas",
            "Tumpat",
            "Bachok",
            "Tanah Merah",
            "Pasir Puteh",
            "Kuala Krai",
            "Machang",
            "Gua Musang",
            "Jeli",
          ],
          ["Alor Gajah", "Jasin", "Melaka Tengah"],
          [
            "Seremban",
            "Port Dickson",
            "Jempol",
            "Tampin",
            "Kuala Pilah",
            "Rembau",
            "Jelebu",
          ],
          [
            "Bera",
            "Bentong",
            "Cameron Highlands",
            "Jerantut",
            "Kuantan",
            "Lipis",
            "Maran",
            "Pekan",
            "Raub",
            "Rompin",
            "Temerloh",
          ],
          [
            "Southwest Penang",
            "South Seberang Perai",
            "Central Seberang Perai",
            "North Sebrang Perai",
            "North Seberang Perai",
            "Northeast Penang",
          ],
          [
            "Batang Padang",
            "Manjung",
            "Kinta",
            "Kerian",
            "Kuala Kangsar",
            "Larut, Matang and Selama",
            "Hilir Perak",
            "Selama",
            "Perak Tengah",
            "Kampar",
            "Muallim",
            "Bagan Datuk",
          ],
          ["Perlis"],
          [
            "Beaufort",
            "Beluran",
            "Kalabakan",
            "Keningau",
            "Kinabatangan",
            "Kota Belud",
            "Kota Kinabalu",
            "Kota Marudu",
            "Kuala Penyu",
            "Kudat",
            "Kunak",
            "Lahad Datu",
            "Nabawan",
            "Papar",
            "Penampang",
            "Pitas",
            "Putatan",
            "Ranau",
            "Sandakan",
            "Semporna",
            "Sipitang",
            "Tambunan",
            "Telupid",
            "Tenom",
            "Tongod",
            "Tuaran",
          ],
          [
            "Kuching",
            "Sri Aman",
            "Sibu",
            "Miri",
            "Limbang",
            "Sarikei",
            "Kapit",
            "Samarahan",
            "Bintulu",
            "Betong",
            "Mukah",
            "Serian",
          ],
          [
            "Gombak",
            "Hulu Langat",
            "Hulu Selangor",
            "Klang",
            "Kuala Langat",
            "Kuala Selangor",
            "Petaling",
            "Sabak Bernam",
            "Sepang",
          ],
          [
            "Besut",
            "Dungun",
            "Hulu Terengganu",
            "Kemaman",
            "Kuala Nerus",
            "Kuala Terengganu",
            "Marang",
            "Setiu",
          ],
          [
            "Bukit Bintang",
            "Titiwangsa",
            "Setiawangsa",
            "Wangsa Maju",
            "Batu",
            "Kepong",
            "Segambut",
            "Lembah Pantai",
            "Seputeh",
            "Bandar Tun Razak",
            "Cheras",
          ],
          ["Labuan"],
          ["Putrajaya"],
        ];

        let countListOfDistricts = [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0],
          [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,
          ],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0],
          [0],
        ];

        let formattedDistrict = [];
        let originalDistrict = [];
        let formattedState = [];
        let chosenStateIndex = 0;

        for (let state in states) {
          let formatState = states[state].toLowerCase();
          formattedState.push(formatState);
          if (formatState.includes(stateSelected.toLowerCase())) {
            let indexChosen = formattedState.indexOf(formatState);
            chosenStateIndex = indexChosen;
            console.log(chosenStateIndex);

            for (let key in allEmergencyData) {
              let address = allEmergencyData[key].address;
              let year = allEmergencyData[key].date.slice(0, 4);
              let reasonData = allEmergencyData[key].reason;
              let newAddress = address.replace(/[,.]/g, "");
              let newReason = reasonData.replace(/[,.]/g, "");
              let formatAddress = newAddress.toLowerCase();
              let formatReasonData = newReason.toLowerCase();

              for (let districts in listOfDistricts[chosenStateIndex]) {
                // console.log(listOfDistricts[chosenStateIndex][districts])
                originalDistrict.push(
                  listOfDistricts[chosenStateIndex][districts]
                );
                let formatDistrict =
                  listOfDistricts[chosenStateIndex][districts].toLowerCase();
                formattedDistrict.push(formatDistrict);
                if (
                  formatAddress.includes(formatDistrict) &&
                  formatReasonData.includes("fire") &&
                  year == yearSelected
                ) {
                  let indexSelected = formattedDistrict.indexOf(formatDistrict);
                  console.log(formatDistrict, "jjjj");
                  countListOfDistricts[chosenStateIndex][indexSelected] += 1;
                }
              }
            }
          }
        }

        for (let a in listOfDistricts[chosenStateIndex]) {
          flatListDict["x"] = listOfDistricts[chosenStateIndex][a];
          flatListDict["y"] = countListOfDistricts[chosenStateIndex][a];
          flatListDict["id"] = a;
          listOfFlatDict.push(flatListDict);
          flatListDict = {};
        }
        setFireFlatList(listOfFlatDict);
      });
  }

  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = (item) => {
    setSelectedItem(item);
    console.log(item.year, "iyemtt");
    setYear(item.year);
    firebase
      .firestore()
      .collection("EmergencyReport")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          allEmergencyData.push(documentSnapshot.data());
        });

        let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let dictOfCasesCount = {};
        let listOfDictOfCasesCount = [];
        let finalResult = {};

        let flatListDict = {};
        let listOfFlatDict = [];

        let formattedState = [];

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
              count[indexSelected] += 1;
            }

            setcountTotal(count);
          }
        }
        // console.log(count,"jjjjj")
        for (let a in states) {
          dictOfCasesCount["x"] = states[a];
          dictOfCasesCount["y"] = count[a];

          listOfDictOfCasesCount.push(dictOfCasesCount);
          dictOfCasesCount = {};
        }

        finalResult["StateCases"] = listOfDictOfCasesCount;
        setPieTotal(finalResult);
      });
  };

  return (
    <View styles={styles.container}>
      <DropDown value={selectedItem} data={years} onSelect={onSelect} />
      <View>
        <Text style={styles.top}>Number of Fire Cases Per District</Text>
      </View>

      <View style={styles.container_1}>
        <View style={styles.container_2}>
          <VictoryPie
            // standalone={false}
            width={600}
            height={280}
            style={{
              labels: { fontSize: "12", fill: "grey" },
            }}
            animate={{
              duration: 200,
            }}
            alignItems="left"
            colorScale={[
              "black",
              "#ffa552",
              "#fcde9c",
              "silver",
              "maroon",
              "red",
              "#E04D01",
              "#FFE61B",
              "#9D5C0D",
              "#381d2a",
              "olive",
              "yellow",
              "navy",
              "orange",
              "teal",
              "#ba5624",
            ]}
            data={pieTotal.StateCases}
            labels={({ datum }) => (datum.y === 0 ? "" : datum.x)}
            labelRadius={({ innerRadius }) => innerRadius + 95}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPressIn: () => {
                    return [
                      {
                        target: "data",
                        mutation: ({ style }) => {
                          return style.fill === "white"
                            ? null
                            : { style: { fill: "white" } };
                        },
                      },
                      {
                        target: "labels",
                        mutation: (props) => {
                          console.log("-----------");
                          console.log("text: ", props);
                          console.log("text: ", props.datum["x"]);
                          districtOfArea(props.datum["x"]);
                          setStateSelected(props.datum["x"]);
                          return props.style.fill === "white"
                            ? null
                            : { style: { fill: "white" } };
                        },
                      },
                    ];
                  },
                  onPressOut: () => {},
                },
              },
            ]}
          />
        </View>
      </View>
      <Text style={{ paddingLeft: 20, paddingTop: 10, color: "#C1C1C1" }}>
        State Selected: {stateSelected}
      </Text>

      <View style={styles.container_3}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>List Of District</Text>
          <Text style={styles.title}>No of Cases</Text>
        </View>
        <FlatList
          data={fireFlatList}
          renderItem={({ item }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.item}>{item.x}</Text>
              <Text style={styles.item}>{item.y}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CompareCasesState")}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DistrictPieFlood")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DistrictPieFire;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: 50,
  },
  top: {
    fontSize: 18,
    fontWeight: "bold",
    // paddingLeft:10,
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
    // flex:1,
    // backgroundColor:"dodgerblue",
    // alignItems:'center',
    // justifyContent:'center',
    // marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    height: 250,
    alignSelf: "center",
    elevation: 3,
    width: 330,
  },
  container_2: {
    alignItems: "center",
    justifyContent: "center",
  },

  container_3: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    height: 150,
    // alignSelf:'center',
    elevation: 3,
    width: 330,
    alignSelf: "center",
  },
  item: {
    padding: 10,
    fontSize: 15,
    marginTop: 5,
    // fontWeight:'bold',
  },

  legend_container: {
    // flex:1,
    width: 50,
    height: 50,
  },
  title: {
    // padding: 10,
    paddingBottom: 12,
    paddingTop: 9,
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
});
