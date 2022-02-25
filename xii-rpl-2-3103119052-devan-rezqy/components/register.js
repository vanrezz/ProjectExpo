import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import ButtonLogin, { ButtonRegister } from './button';

const HalRegister = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#90ee90' }}>
      {/* Tampilan Atas */}
      <StatusBar style="light" />
     
      {/* Tampilan Bawah */}
      <View style={[{ paddingHorizontal: 20, marginTop: 90 }]}>
        <Text
          style={[
            styles.textwhite,
            { fontSize: 45, fontWeight: '', marginStart: 4 },
          ]}>
          {' '}
          REGISTER
        </Text>
        <TextInput
          placeholder="Masukkan Username"
          placeholderTextColor="gold"
          style={styles.textinputstyle}
          secureTextEntry
        />
        <TextInput
          placeholder="Masukkan Email"
          placeholderTextColor="gold"
          style={styles.textinputstyle}
        />
        <TextInput
          placeholder="Masukkan Password"
          placeholderTextColor="gold"
          style={styles.textinputstyle}
          secureTextEntry
        />
        <ButtonRegister kata="Register" />
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[styles.textwhite, { marginStart: 30, marginVertical: 20 }]}>
            Sudah Punya Akun?
          </Text>
          <Text
            style={[styles.textwhite, { paddingVertical: 20 }]}
            onPress={() => navigation.navigate('Login')}>
            Login disini!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textwhite: {
    color: 'white',
  },
  textinputstyle: {
    backgroundColor: '#00003f',
    margin: 15,
    borderRadius: 30,
    height: 40,
    paddingLeft: 20,
    color: 'white',
    borderColor: '#003f91',
    borderWidth: 2,
    fontWeight: 'bold',
  },
  tombol: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
    width: 100,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#003f91',
  },
});
export default HalRegister;
