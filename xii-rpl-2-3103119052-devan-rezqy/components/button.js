import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export const ButtonLogin = (props) => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <Pressable style={styles.tombol}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.kata}</Text>
      </Pressable>
    </View>
  );
};
export const ButtonRegister = (props) => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <Pressable style={styles.tombol}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.kata}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default ButtonLogin;