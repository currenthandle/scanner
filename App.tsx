/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import Scanner from './components/Scanner'
import { useState } from 'react'
// import React from 'react'

export default function App() {
  // console.log('app somthing new')
  // console.error('log error')
  const [scans, setScans] = useState<string[]>([])
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style='auto' />
      <Text className='z-10 w-full flex justify-center'>
        here are the scans:
        {scans.map((scan, i) => {
          if (!scan) {
            return '*, '
          }
          return `${i.toString()}, `
        })}
      </Text>
      <Scanner scans={scans} setScans={setScans} />
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
