import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/HomeStackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetail'>;

export default function MovieDetail({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Detail Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1E90FF',
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
