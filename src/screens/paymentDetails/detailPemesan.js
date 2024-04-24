import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

const DetailPemesan = () => {

  const radioButtons = useMemo(() => ([
    {
      id: '1',
      label: 'Saya memesan untuk sendiri',
      value: 'option1',
      color: '#385c94',
    },
    {
      id: '2',
      label: 'Saya memesan untuk orang lain',
      value: 'option2',
      color: '#385c94'
    }
  ]), []);

  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    setSelectedId('2')
  }, [])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.detailPemesanText}>Detail Pemesan</Text>
        <View style={styles.curvedBox}>
          <View style={styles.detailCurvedBox}>
            <View style={styles.detailTextContainer}>
              <Text style={styles.pemesanText}>Tn. Bjorn</Text>
              <Text style={styles.pemesanDetailText}>bjorn66@gmail.com</Text>
              <Text style={styles.pemesanDetailText}>+628 22 2222 2222</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeText}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          containerStyle={{ alignItems: 'flex-start' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  detailPemesanText: {
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
  detailCurvedBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
  },
  detailTextContainer: {
    flex: 1,
  },
  changeText: {
    color: '#0000FF',
    textDecorationLine: 'underline'
  },
  pemesanText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  pemesanDetailText: {
    fontSize: 14,
    color: '#AEAEAE'
  },
})

export default DetailPemesan;