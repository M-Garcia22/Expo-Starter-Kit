import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../app/contexts/ThemeContext';
import { ArrowRight, ArrowLeft } from 'lucide-react-native';

/**
 * Example screen for demonstrating proper navigation outside of tab navigation
 */
export default function ExampleScreen() {
  const router = useRouter();
  const { isDarkMode, accentColor } = useTheme();
  
  return (
    <ScrollView className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <View className="flex-1 p-6">
        <View className="items-center justify-center py-6">
          <Text 
            className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            Example Non-Tab Screen
          </Text>
          
          <Text 
            className={`text-base mb-8 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            This screen demonstrates proper navigation with smooth transitions outside of tab navigation.
          </Text>
          
          <View className="flex-row space-x-4 mb-6">
            <TouchableOpacity
              onPress={() => router.push('/(non-tabs)/detail')}
              className={`px-6 py-3 rounded-full bg-${accentColor} flex-row items-center`}
            >
              <Text className="text-white font-medium">Next Screen</Text>
              <ArrowRight size={18} color="white" className="ml-2" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            onPress={() => router.back()}
            className={`flex-row items-center justify-center mt-8 px-4 py-2 rounded-lg
              ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            <ArrowLeft size={16} color={accentColor} />
            <Text 
              className={`ml-2 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              Back to Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
} 