import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import Header from "./header";
import DetailPesanan from "./detailPesanan";
import DetailPemesan from "./detailPemesan";
import DataTamu from "./dataTamu";
import API from '../../_utilities/axios'

const PaymentDetails = ({ navigation, route }) => {
  const [data, setData] = useState({})
  const Details = () => {
    API.get('/').then((res) => {
      const result = res.data.chosen_hotel.data.get_chosen_hotel

      setData(result)
    })
  }

  useEffect(() => {
    Details()
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      {Object.keys(data).length === 0 ? (
        <ActivityIndicator size="large" color="#385c94" />
      ) : (
        <DetailPesanan data={data} />
      )}
      <DetailPemesan />
      <DataTamu navigation={navigation} route={route} />
    </ScrollView>
  );
};

export default PaymentDetails;
