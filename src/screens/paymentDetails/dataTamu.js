import React, { useEffect, useState } from "react";
import {
  RootTagContext,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TamuCard from "./_components/tamuCard";

// const DATA = [
//   {
//     title: "Pemesan",
//     data: [
//       { id: "1", prefix: "Mr", name: "John Doe" },
//       { id: "2", prefix: "Ms", name: "Jane Doe" },
//     ],
//   },
// ];

const DataTamu = ({ navigation, route }) => {
  const [data, setData] = useState([
    {
      id: "1",
      prefix: "Mr",
      name: "John Doe",
    },
    {
      id: "2",
      prefix: "Ms",
      name: "Jane Doe",
    },
  ]);

  const { updatedData } = route.params || {};

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (newData && newData.length === 0) {
      setNewData(updatedData);
    }
    // console.log(updatedData);
  }, [newData]);

  const _handleDetail = () => {
    if (newData !== undefined && newData !== null && newData.length !== 0) {
      navigation.navigate("TambahTamu", { data: newData });
    } else {
      navigation.navigate("TambahTamu", { data: data });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dataTamuText}>Data Tamu</Text>
      {newData !== undefined && newData !== null && newData.length !== 0
        ? newData.map((item) => (
            <TamuCard key={item.id} prefix={item.prefix} name={item.name} />
          ))
        : data.map((item) => (
            <TamuCard key={item.id} prefix={item.prefix} name={item.name} />
          ))}
      <TouchableOpacity onPress={_handleDetail}>
        <Text style={styles.changeText}>Ubah Data Tamu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: -8,
    marginBottom: 16,
  },
  dataTamuText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  changeText: {
    marginTop: 10,
    alignSelf: "flex-end",
    color: "#0000FF",
    textDecorationLine: "underline",
  },
});

export default DataTamu;
