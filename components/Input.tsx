import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Props {
  icon: keyof typeof Feather.glyphMap;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input = ({ icon, ...props }: Props) => (
  <View style={styles.container}>
    <Feather name={icon} size={20} color="#999" style={styles.icon} />
    <TextInput
      style={[styles.input, Platform.OS === 'web' && { outlineWidth: 0, outlineStyle: 'none' } as any]}
      placeholderTextColor="#999"
      underlineColorAndroid="transparent"
      autoComplete="off"
      spellCheck={false}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginVertical: 8,
    backgroundColor: '#fff'
  },
  icon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    padding: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    height: '100%',
  } as any,
});
