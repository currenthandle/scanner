import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)

  const [scans, setScans] = useState<string[]>([])

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string
    data: string
  }) => {
    // setScanned(true)
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    const id = parseInt(data.substring(0, 2))

    // Extract the 'length' which is the next two characters of the string
    const length = parseInt(data.substring(2, 4))

    // Extract the 'data' which is the rest of the string
    const chunkData = data.substring(4)

    const newScans = [...scans]
    newScans[id] = chunkData
    setScans(newScans)

    if (length === newScans.length) {
      for (let i = 0; i < newScans.length; i++) {
        if (!newScans[i]) {
          return
        }
      }
      setScanned(true)
      // newScans.forEach((scan) => {
      //   if (!scan) {
      //     return
      //   }
      // })
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View className='w-full flex-1 flex flex-col justify-center'>
      {/* <View style={styles.container}> */}
      {/* <Text className='z-10 w-full flex justify-center'>
        here are the scans:
        {scans.map((scan, i) => {
          if (!scan) {
            return '*, '
          }
          return `${i.toString()}, `
        })}
      </Text> */}
      {!scanned ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <Text>
          {scans.reduce((acc, scan) => {
            return acc + scan
          })}
        </Text>
      )}
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
// })
