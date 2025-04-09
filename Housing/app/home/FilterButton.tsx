import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';

type FilterButtonProps = {
  title: string;
  onPress: () => void;
  isVisible: boolean;
  options: string[];
};

const FilterButton = ({ title, onPress, isVisible, options }: FilterButtonProps) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      className="bg-white px-3 py-2 rounded-full border border-gray-300"
    >
      <Text className="text-sm text-gray-600">{title} ▼</Text>
    </TouchableOpacity>
    {isVisible && (
      <View
        style={{
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        className="bg-white border border-gray-300 rounded-xl mt-2 p-2"
      >
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => Alert.alert(option)}>
            <Text className="text-sm text-gray-700 py-2">{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </View>
);

export default FilterButton;
