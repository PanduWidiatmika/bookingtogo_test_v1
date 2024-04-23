import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./header";
import CustomDropDownPicker from "./_components.js/customDropdownPicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { customToast } from "../../_utilities/toast";

const screenWidth = Dimensions.get("window").width;

const TambahTamu = ({ navigation, route }) => {
  const [openState, setOpenState] = useState([]);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    { label: "MR", value: "Mr" },
    { label: "MS", value: "Ms" },
  ]);
  const [inputData, setInputData] = useState([]);

  const { data } = route.params;

  useEffect(() => {
    if (data && data.length > 0) {
      setInputData(data);
      setOpenState(data.map(() => false));
    }
  }, [data]);

  const _handleSubmit = () => {
    const isEmptyName = inputData.some((item) => item.name.trim() === "");

    if (isEmptyName) {
      const msgType = "error";
      customToast(msgType, "Name field cannot be empty!", 3000);
      return;
    }

    const msgType = "success";
    customToast(msgType, "Success!", 3000);
    navigation.replace("PaymentDetails", { updatedData: inputData });
    // console.log(inputData);
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "PaymentDetails", updatedData: inputData }],
    // });
  };

  const addInputContainer = () => {
    if (inputData.length < 4) {
      const randomPrefix = Math.random() < 0.5 ? "Mr" : "Ms";

      setInputData([
        ...inputData,
        { id: inputData.length + 1, prefix: randomPrefix, name: "" },
      ]);
      setOpenState([...openState, false]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header navigation={navigation} route={route} />
      <View style={styles.container}>
        <Text style={styles.dataTamuText}>Data Tamu</Text>
        {inputData.map((item, index) => (
          <View key={index} style={styles.inputContainer}>
            <CustomDropDownPicker
              index={index}
              openState={openState}
              setOpenState={setOpenState}
              value={item.prefix}
              //error message = [Function anonymous]
              setValue={(newValue) => {
                const newInputData = [...inputData];
                newInputData[index].prefix = newValue;
                setInputData(newInputData);
              }}
              items={items}
              inputData={inputData}
              setInputData={setInputData}
            />
            <TextInput
              style={[styles.input]}
              value={item.name}
              onChangeText={(text) => {
                const newInputData = [...inputData];
                newInputData[index].name = text;
                setInputData(newInputData);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                const newInputData = [...inputData];
                newInputData.splice(index, 1);
                setInputData(newInputData);
              }}
            >
              <FontAwesome5
                name="trash-alt"
                size={35}
                color="#FF0000"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ))}
        {inputData.length < 4 && (
          <TouchableOpacity
            onPress={addInputContainer}
            style={styles.textTambahContainer}
          >
            <Text style={styles.tambahTamuText}>+ Tambah Data Tamu</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => _handleSubmit()}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  dataTamuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#385c95",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#AEAEAE",
    marginLeft: 10,
    minHeight: 50,
    width: "57%",
  },
  icon: {
    marginLeft: 10,
  },
  textTambahContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  tambahTamuText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#FFA756",
  },
  button: {
    width: screenWidth - 40,
    backgroundColor: "#FFA756",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default TambahTamu;
