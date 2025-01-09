import React from 'react';
import { View, Text } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundColor: string;
  iconColor: string;
  testID?: string;
}

/**
 * Feature card component that displays an icon, title, and description
 * 
 * @param {FeatureCardProps} props - Component props
 * @returns {React.ReactElement} Feature card component
 */
export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  backgroundColor,
  iconColor,
  testID 
}: FeatureCardProps) {
  const { isDarkMode } = useTheme();

  return (
    <View 
      testID={testID}
      className={`${backgroundColor} mt-4 rounded-xl p-4 flex-row items-center ${isDarkMode ? 'bg-gray-800' : ''}`}
    >
      <View className="w-12 items-center">
        <Icon 
          color={iconColor}
          size={24} 
        />
      </View>
      <View className="flex-1">
        <Text className={`font-semibold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          {title}
        </Text>
        <Text className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </Text>
      </View>
    </View>
  );
} 

export default FeatureCard;