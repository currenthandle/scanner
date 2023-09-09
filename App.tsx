/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import Scanner from './components/Scanner'
// import React from 'react'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style='auto' />
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Scanner />
      {/* <span>hello</span> */}
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 200,
//     height: 100000,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
