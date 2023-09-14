/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import Scanner from './components/Scanner'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import * as WebAssembly from 'react-native-webassembly'

export default function App() {
  const wasmRef = useRef<any>()
  useEffect(() => {
    const loadWasm = async () => {
      const { data: bufferSource } = await axios({
        url: 'https://github.com/torch2424/wasm-by-example/raw/master/examples/hello-world/demo/assemblyscript/hello-world.wasm',
        method: 'get',
        responseType: 'arraybuffer',
      })

      const module = await WebAssembly.instantiate<{
        add: (a: number, b: number) => number
      }>(bufferSource)

      // wasmRef.current = module
    }
    loadWasm()
  }, [])
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
