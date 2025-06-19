import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { LogoHeader } from '@/components/LogoHeader';
import { HeartIcon } from '@/components/HeartIcon';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.screen}>
      <LogoHeader />

      <View style={styles.card}>
        <HeartIcon size={40} style={styles.icon} color="#2463EB" />
        <Text style={styles.title}>Inicio de Sesión</Text>
        <Text style={styles.subtitle}>Accede a tu cuenta de salud</Text>

        <Text style={[styles.label, { marginTop: 32 }]}>Correo Electrónico</Text>
        <Input
          icon="mail"
          placeholder="correo@gmail.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>
        <Input
          icon="lock"
          placeholder="••••••••"
          secureTextEntry
          value={pass}
          onChangeText={setPass}
        />

        <Text style={{ textAlign: 'center', marginVertical: 16, fontSize: 16 }}>
            ¿No tienes una cuenta registrada?{' '}
            <Text
                style={{ fontWeight: 'bold', color: '#2563eb' }}
                onPress={() => {
                  router.push('/auth/register');
                }}
            >
                Crear cuenta aquí
            </Text>
        </Text>

        <Button title="Ingresar" onPress={() => router.push('/profile/profile')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e5f1fb'
  },
  card: {
    margin: 20,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginTop: 60,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5
  },
  icon: {
    alignSelf: 'center',
    fontSize: 40,
    backgroundColor: '#D4F2F8',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10
  },
  label: {
    fontWeight: 'semibold',
    fontSize: 15,
    marginTop: 12,
    marginBottom: 4,
  }
});
