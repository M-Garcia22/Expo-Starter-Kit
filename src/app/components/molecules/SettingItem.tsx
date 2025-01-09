import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface SettingItemProps {
  icon: LucideIcon;
  label: string;
  description?: string;
  control?: React.ReactNode;
  onPress?: () => void;
  testID?: string;
}

/**
 * A setting item component that combines an icon, label, and optional control
 * 
 * @param {SettingItemProps} props - Component props
 * @returns {React.ReactElement} Setting item component
 */
export function SettingItem({ 
  icon: Icon, 
  label, 
  description, 
  control, 
  onPress,
  testID 
}: SettingItemProps) {
  const { isDarkMode } = useTheme();

  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      className={`flex-row items-center justify-between px-4 py-3 w-full rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <View className="flex-row items-center flex-1">
        <Icon 
          size={24} 
          color={isDarkMode ? '#D1D5DB' : '#4B5563'} 
        />
        <View className="ml-3 flex-1">
          <Text className={`text-base font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            {label}
          </Text>
          {description && (
            <Text className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {description}
            </Text>
          )}
        </View>
      </View>
      {control && (
        <View className="ml-4">
          {control}
        </View>
      )}
    </Pressable>
  );
} 

export default SettingItem;