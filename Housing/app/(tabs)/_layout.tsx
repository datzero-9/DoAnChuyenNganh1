import React, { ReactNode } from "react";
import { View, TouchableOpacity, GestureResponderEvent } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


type CustomTabBarButtonProps = {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ children, onPress }) => (
  <View
    style={{
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: "center",
      marginTop: -50,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      // shadowOpacity: 0.25,
      // shadowRadius: 3.5,
      elevation: 5,
    }}
  >
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#687553",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  </View>
);

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "relative",
          left: 15,
          right: 15,
          elevation: 5,
          backgroundColor: "white",
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 70,
          paddingBottom: 0,
          // shadowColor: "#000",
          // shadowOpacity: 0.1,
          // shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="explore"
  
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons  color={focused ? "#687553" : "#A3A2A9"} size={28} name="newspaper-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons color={focused ? "#687553" : "#A3A2A9"} size={28} name="chatbox-ellipses-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons style={focused ? styles.focus : ''}  color="white" size={35} name="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons color={focused ? "#687553" : "#A3A2A9"} size={28} name="heart-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons color={focused ? "#687553" : "#A3A2A9"} size={28} name="person-outline" />
          ),
        }}
      />
    </Tabs>
  );
};
const styles = StyleSheet.create({
  icon: {
    // marginTop: 5
    // paddingBottom: 15
  },
  focus: {
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  }
});

export default RootLayout;