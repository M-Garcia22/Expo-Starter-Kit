import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface SettingsSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  testID?: string;
}

/**
 * Atomic switch component for settings
 * 
 * @param {SettingsSwitchProps} props - Component props
 * @returns {React.ReactElement} Switch component
 */
export function SettingsSwitch({ value, onValueChange, testID }: SettingsSwitchProps) {
  const { isDarkMode } = useTheme();

  return (
    <Switch
      testID={testID}
      value={value}
      onValueChange={onValueChange}
      trackColor={{ 
        false: isDarkMode ? '#4B5563' : '#767577', 
        true: isDarkMode ? '#1E40AF' : '#81b0ff' 
      }}
      thumbColor={
        value 
          ? (isDarkMode ? '#2563eb' : '#2563eb') 
          : (isDarkMode ? '#6B7280' : '#f4f3f4')
      }
    />
  );
} 

export default SettingsSwitch;