import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
  return (
     <SafeAreaView >
         <View className='border '>
          <Text>
            xin chào
          </Text>
        </View>
       </SafeAreaView>
  )
}

export default profile