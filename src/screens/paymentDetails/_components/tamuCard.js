import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TamuCard = ({ name, prefix }) => {
  return (
    <View style={styles.curvedBox}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={prefix === "Ms" ? "face-woman-profile" : "face-man-profile"}
          size={25}
          color="#000"
        />
        <Text style={styles.text}>
          {prefix === "Ms" ? "Ny." : "Tn."} {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  curvedBox: {
    marginVertical: 10,
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  container: {
    flexDirection: "row",
    margin: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    left: 10,
  },
});

export default TamuCard;
