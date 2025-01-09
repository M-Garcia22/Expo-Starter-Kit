import React, { useCallback, useState } from 'react';
import { View, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../../contexts/ThemeContext';

export function DebugStorageSection() {
  const { isDarkMode } = useTheme();
  const [debugKey, setDebugKey] = useState('');
  const [debugValue, setDebugValue] = useState('');

  const handleAddToAsyncStorage = useCallback(async () => {
    if (!debugKey || !debugValue) {
      Alert.alert('Error', 'Please enter both key and value');
      return;
    }

    try {
      await AsyncStorage.setItem(debugKey, debugValue);
      Alert.alert('Success', `Added item with key "${debugKey}" to AsyncStorage`);
      setDebugKey('');
      setDebugValue('');
    } catch (error) {
      Alert.alert('Error', `Failed to add item: ${String(error)}`);
    }
  }, [debugKey, debugValue]);

  return (
    <View className="px-4 py-3 mt-4 space-y-4">
      <TextInput
        className={`
          rounded-xl mb-4 p-4 
          ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} 
          border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}
        `}
        placeholder="Enter key"
        placeholderTextColor={isDarkMode ? '#6B7280' : '#9CA3AF'}
        value={debugKey}
        onChangeText={setDebugKey}
      />
      <TextInput
        className={`
          rounded-xl p-4 
          ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} 
          border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}
        `}
        placeholder="Enter value"
        placeholderTextColor={isDarkMode ? '#6B7280' : '#9CA3AF'}
        value={debugValue}
        onChangeText={setDebugValue}
      />
      <TouchableOpacity 
        className={`
          rounded-xl p-4 items-center mt-4 mb-2 
          ${isDarkMode ? 'bg-blue-800' : 'bg-blue-500'}
        `}
        onPress={handleAddToAsyncStorage}
      >
        <Text className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-white'}`}>
          Add to AsyncStorage
        </Text>
      </TouchableOpacity>
    </View>
  );
} 

export default DebugStorageSection;