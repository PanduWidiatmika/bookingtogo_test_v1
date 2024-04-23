import React from "react";
import { ScrollView } from "react-native";
import Header from "./header";
import DetailPesanan from "./detailPesanan";
import DetailPemesan from "./detailPemesan";
import DataTamu from "./dataTamu";

const PaymentDetails = ({ navigation, route }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <DetailPesanan />
      <DetailPemesan />
      <DataTamu navigation={navigation} route={route} />
    </ScrollView>
  );
};

export default PaymentDetails;
