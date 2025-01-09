import React from 'react';
import { View } from 'react-native';
import { HeaderText } from '../atoms/HeaderText';
import { useTheme } from '../../contexts/ThemeContext';

interface HomeHeaderProps {
  testID?: string;
}

/**
 * Home header component that displays the main title
 * 
 * @param {HomeHeaderProps} props - Component props
 * @returns {React.ReactElement} Home header component
 */
export function HomeHeader({ testID }: HomeHeaderProps) {
  const { isDarkMode } = useTheme();

  return (
    <View 
      testID={testID} 
      className={`mb-8 items-center ${isDarkMode ? 'bg-gray-900' : ''}`}
    >
      <HeaderText>
        Expo Template
      </HeaderText>
    </View>
  );
} 

export default HomeHeader;