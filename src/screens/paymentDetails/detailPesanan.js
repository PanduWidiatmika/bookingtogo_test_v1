import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DetailPesanan = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.step}>
          <View style={styles.circle}>
            <Text style={styles.stepText}>1</Text>
          </View>
          <Text style={styles.stepTitle}>Detail Pesanan</Text>
        </View>
        <View style={styles.dashLine} />
        <View style={styles.fadeContainer}>
          <View style={styles.step}>
            <View style={styles.circle}>
              <Text style={styles.stepText}>2</Text>
            </View>
            <Text style={styles.stepTitle}>Pembayaran</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>Detail Pesanan</Text>
          <TouchableOpacity>
            <View style={styles.curvedBox}>
              <View style={styles.detailCurvedBox}>
                <Image source={require('../../../assets/photos/novotel.jpg')} style={styles.image} />
                <View style={styles.detailTextContainer}>
                  <Text style={styles.hotelText}>Novotel Tangerang</Text>
                  <Text style={styles.hotelDetailText}>Executive Suit Room with Breakfast</Text>
                  <Text style={styles.hotelDetailText}>1 Kamar • Quadruple • 2 Tamu • 10 Malam</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.checkContainer}>
            <Text style={styles.checkText}>Check-In</Text>
            <Text style={styles.checkStatus}>24 April 2024</Text>
          </View>
          <View style={styles.checkContainer}>
            <Text style={styles.checkText}>Check-Out</Text>
            <Text style={styles.checkStatus}>28 April 2024</Text>
          </View>
          <View style={styles.refundContainer}>
            <MaterialCommunityIcons name="cash-refund" size={18} color="#FFA756" />
            <Text style={styles.refundText}>Dapat direfund jika dibatalkan</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    left: 85
  },
  step: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#385c94',
    marginRight: 5,
  },
  stepText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stepTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dashLine: {
    width: 15,
    height: 3,
    backgroundColor: '#385c94',
    marginHorizontal: 5,
  },
  fadeContainer: {
    opacity: 0.3,
  },
  box: {
    backgroundColor: '#fff',
    borderColor: '#f0f0f0',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  detailContainer: {
    marginVertical: 12,
    marginHorizontal: 16
  },
  detailText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  curvedBox: {
    marginVertical: 10,
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#f0f0f0'
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  checkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left'
  },
  checkStatus: {
    fontSize: 14,
    color: '#AEAEAE',
    textAlign: 'right'
  },
  detailCurvedBox: {
    flexDirection: 'row',
    margin: 10
  },
  image: {
    height: 69,
    width: 69,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  detailTextContainer: {
    flex: 1,
    left: 12
  },
  hotelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#385c94'
  },
  hotelDetailText: {
    fontSize: 11,
    color: '#AEAEAE'
  },
  refundContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10
  },
  refundText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFA756',
    marginLeft: 9
  }
});

export default DetailPesanan;
