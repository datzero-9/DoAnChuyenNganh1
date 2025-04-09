import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import images from "@/constants/images";
import FilterButton from "../home/FilterButton";
import RealEstateItem from "../home/RealEstateItem";
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "1",
    title: "Tổng hợp quỹ hàng Vinhomes Đan Phượng - Giá tốt từ CDT - Không chênh",
    price: "Giá thỏa thuận · 130 m²",
    location: "Đan Phượng, Hà Nội",
    image: images.homeBig,
    contact: "0365606***",
  },
];

type FilterState = {
  type: boolean;
  price: boolean;
  area: boolean;
};

const Home = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState<FilterState>({
    type: false,
    price: false,
    area: false,
  });
  const [favorites, setFavorites] = useState<any[]>([]);

  const handleFavoriteToggle = (item: any) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.id === item.id);
      if (isAlreadyFavorite) {
        return prevFavorites.filter((fav) => fav.id !== item.id); 
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  const handleFilterPress = (filterName: keyof FilterState) => {
    setIsFilterVisible((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const handleItemPress = () => {
    console.log(favorites); 
    navigation.navigate('Favorite', { favorites });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="bg-white p-4">
        <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-2 mb-3">
          <Feather name="search" size={20} color="#666" />
          <View className="ml-3 flex-1">
            <Text className="text-black font-semibold mb-1">Bạn tìm BĐS ở đâu?</Text>
            <TextInput
              placeholder="Tìm Đường phố"
              value={searchText}
              onChangeText={setSearchText}
              className="text-gray-700 text-sm"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Filter buttons */}
        <View className="flex-row justify-between gap-2 relative">
          <FilterButton
            title="Loại nhà đất"
            onPress={() => handleFilterPress("type")}
            isVisible={isFilterVisible.type}
            options={["Nhà phố", "Căn hộ", "Biệt thự"]}
          />
          <FilterButton
            title="Mức giá"
            onPress={() => handleFilterPress("price")}
            isVisible={isFilterVisible.price}
            options={["Dưới 1 tỷ", "1-2 tỷ", "Trên 2 tỷ"]}
          />
          <FilterButton
            title="Diện tích"
            onPress={() => handleFilterPress("area")}
            isVisible={isFilterVisible.area}
            options={["Dưới 50 m²", "50-100 m²", "Trên 100 m²"]}
          />
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RealEstateItem
            item={item}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
            onPress={handleItemPress}
          />
        )}
        showsVerticalScrollIndicator={false}
        className="mt-0 mr-4 ml-4"
      />
    </SafeAreaView>
  );
};

export default Home;
