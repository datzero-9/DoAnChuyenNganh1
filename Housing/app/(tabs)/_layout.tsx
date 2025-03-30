import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
            className={`${focused ? "text-yellow-300" : "text-black"} font-bold`}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#FFCC00" : "black"}
              size={22}
              name={focused ? "home" : "home-outline"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text className={`${focused ? "text-yellow-300" : "text-black"} font-bold`}>
              Explore
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#FFCC00" : "black"}
              size={22}
              name={focused ? "newspaper" : "newspaper-outline"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
            className={`${focused ? "text-yellow-300" : "text-black"} font-bold`}
            >
              Chat
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#FFCC00" : "black"}
              size={22}
              name={focused ? "logo-wechat" : "chatbox-ellipses-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
            className={`${focused ? "text-yellow-300" : "text-black"} font-bold`}

            >
              Favorite
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#FFCC00" : "black"}

              size={22}
              name={focused ? "heart-circle-outline" : "heart-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
            className={`${focused ? "text-yellow-300" : "text-black"} font-bold`}

            >
              profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? "#FFCC00" : "black"}
              size={22}
              name={focused ? "person-circle-outline" : "person-outline"}
            />
          ),
        }}
      />


    </Tabs>
  );
};

export default RootLayout;