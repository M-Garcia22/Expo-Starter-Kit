import React from 'react';
import { View, Text } from 'react-native';
import { MenuIcon } from 'lucide-react-native';
import { SettingItem } from '../molecules/SettingItem';
import { SettingsSwitch } from '../atoms/SettingsSwitch';
import { useTheme } from '../../contexts/ThemeContext';

interface BottomMenuSectionProps {
  bottomMenuEnabled: boolean;
  onBottomMenuChange: (value: boolean) => void;
}

/**
 * Bottom Menu section component for toggling bottom navigation menu visibility
 * 
 * @param {BottomMenuSectionProps} props - Component props
 * @returns {React.ReactElement} Bottom Menu section component
 */
export function BottomMenuSection({
  bottomMenuEnabled,
  onBottomMenuChange,
}: BottomMenuSectionProps) {
  const { isDarkMode } = useTheme();

  return (
    <View className="overflow-hidden">
      <SettingItem
        icon={MenuIcon}
        label="Debug Tools"
        description="Show additional debug options"
        control={
          <SettingsSwitch
            value={bottomMenuEnabled}
            onValueChange={onBottomMenuChange}
            testID="bottom-menu-switch"
          />
        }
      />
    </View>
  );
}

export default BottomMenuSection;