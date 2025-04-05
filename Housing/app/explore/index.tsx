import React, { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './Explore';
import Detail from './Detail';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Explore"
    //     component={Explore}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen
    //     name="Detail"
    //     component={Detail}
    //     options={{ headerShown: false }}
    //   />
    // </Stack.Navigator>
    <View>
      <Text>
        <Explore/>
      </Text>
    </View>
  );
};

export default index;