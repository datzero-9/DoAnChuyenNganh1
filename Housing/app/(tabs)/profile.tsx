import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser, useClerk } from "@clerk/clerk-expo";
import { useNavigation } from '@react-navigation/native'; // Import navigation hook (nếu bạn sử dụng React Navigation)

const Profile = () => {
  const { signOut } = useClerk();
  const { user } = useUser();

  const navigation = useNavigation(); // Initialize navigation

  const handleLogout = async () => {

    Alert.alert("Thông báo!", "Bạn có chắc chắn muốn đăng xuất không?", [
      { text: "Hủy", style: "cancel" },
      { text: "Đăng xuất", onPress: () => signOut() },
    ]);
  };


  const infoUser = () => {
    const info = {
      id: user?.id,
      email: user?.emailAddresses[0]?.emailAddress,
      fullName: user?.fullName,
      firstName: user?.firstName,

    }
    console.log(info);
  }
  if (!user) {
    return (
      <SafeAreaView>
        <View>
          <Text>Bạn chưa đăng nhập!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View className="border p-4">
        <Text onPress={() => infoUser()}>Xin chào</Text>
        <TouchableOpacity
          className="bg-red-500 p-2 rounded-md mt-4"
          onPress={handleLogout}
        >
          <Text className="text-white text-center">Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;