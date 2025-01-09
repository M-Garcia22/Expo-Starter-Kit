import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderTextProps {
  children: React.ReactNode;
  testID?: string;
}

/**
 * Main header text component
 * 
 * @param {HeaderTextProps} props - Component props
 * @returns {React.ReactElement} Header text component
 */
export function HeaderText({ children, testID }: HeaderTextProps) {
  const { isDarkMode, accentColor } = useTheme();

  return (
    <Text 
      testID={testID}
      className={`text-3xl font-bold mb-2 text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
      style={{ color: accentColor }}
    >
      {children}
    </Text>
  );
} 

export default HeaderText;