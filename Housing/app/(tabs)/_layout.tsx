import React, { ReactNode } from "react";
import { View, TouchableOpacity, GestureResponderEvent, Text, StyleSheet } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from '@clerk/clerk-expo';

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
      elevation: 5,
    }}
  >
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  </View>
);

const RootLayout = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || isSignedIn === undefined) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/login/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 15,
          right: 15,
          elevation: 5,
          backgroundColor: "white",
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 70,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons color={focused ? "red" : "#A3A2A9"} size={28} name="newspaper-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons color={focused ? "red" : "#A3A2A9"} size={28} name="chatbox-ellipses-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarButton: (props: any) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons style={focused ? styles.focus : ''} color="white" size={35} name="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="Favorite"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons color={focused ? "red" : "#A3A2A9"} size={28} name="heart-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons color={focused ? "red" : "#A3A2A9"} size={28} name="person-outline" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    // marginTop: 5
  },
  focus: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default RootLayout;
