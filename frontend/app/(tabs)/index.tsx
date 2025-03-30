import {
  View,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6, AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Redirect } from "expo-router";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Home = () => {
  return (
    <SafeAreaView >
    <View className='border '>
     <Text>
       xin chào
     </Text>
   </View>
  </SafeAreaView>
  );
};
export default Home;