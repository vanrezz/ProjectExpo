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
import ButtonLogin from './button';

const HalLogin = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#2e8b57' }}>
      {/* Tampilan Atas */}
      <StatusBar style="light" />
      

      {/* Tampilan Bawah */}
      <View style={[{ paddingHorizontal: 20, marginTop:90 }]}>
        <Text
          style={[
            styles.textwhite,
            { fontSize: 40, fontWeight: '', marginStart: 90 },
          ]}>
          {' '}
          LOGIN
        </Text>
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
        <ButtonLogin kata="Login" />
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[styles.textwhite, { marginStart: 20, marginVertical: 20 }]}>
            Tidak Punya Akun?
          </Text>
          <Text
            style={[styles.textwhite, { paddingVertical: 20 }]}
            onPress={() => navigation.navigate('Register')}>
            {' '}
            Buat disini!
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
    margin: 20,
    borderRadius: 0,
    height:40,
    paddingLeft: 20,
    color: 'white',
    borderColor: '#003f91',
    borderWidth: 3,
    fontWeight: 'bold',
  },
  tombol: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
    width: 100,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#003f91',
  },
});
export default HalLogin;
