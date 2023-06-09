import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';

import './styles'
export default function App() {
  return (
    <View className='bg-black w-screen h-screen justify-center items-center'>
      <Text className='text-3xl text-white'>Welcome to ReactNative & Nativewind</Text>
      <ActivityIndicator className='mt-5' size={'large'}></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// $env:NODE_OPTIONS = "--openssl-legacy-provider"
