import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});
