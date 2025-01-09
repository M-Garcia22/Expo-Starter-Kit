import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ 
  children, 
}: SectionTitleProps) {
  const { isDarkMode } = useTheme();

  return (
    <Text 
      className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
    >
      {children}
    </Text>
  );
} 

export default SectionTitle;