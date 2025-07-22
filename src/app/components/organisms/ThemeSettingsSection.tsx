import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { PaletteIcon, MoonIcon, SunIcon, CheckIcon } from 'lucide-react-native';
import { SettingItem } from '../molecules/SettingItem';
import { SettingsSwitch } from '../atoms/SettingsSwitch';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

/**
 * Theme settings section component for managing app theme
 * 
 * @returns {React.ReactElement} Theme settings section component
 */
export function ThemeSettingsSection() {
  const { 
    isDarkMode, 
    toggleTheme, 
    accentColor, 
    setAccentColor, 
    ACCENT_COLORS,
    addCustomColor,
    customColors
  } = useTheme();

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [customColor, setCustomColor] = useState(accentColor);
  const [pendingCustomColor, setPendingCustomColor] = useState('');
  const { t } = useI18n();

  const renderAccentColorOptions = () => {
    const allColors = { ...ACCENT_COLORS, ...customColors.reduce((acc, color, index) => {
      acc[`CUSTOM_${index + 1}`] = color;
      return acc;
    }, {} as Record<string, string>) };

    return Object.entries(allColors).map(([name, colorValue]) => (
      <TouchableOpacity 
        key={name}
        onPress={() => setAccentColor(colorValue)}
        className={`
          w-8 h-8 rounded-lg m-1 items-center justify-center 
          ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
          shadow-sm
        `}
      >
        <View 
          className={`w-6 h-6 rounded-md`} 
          style={{ backgroundColor: colorValue as string }}
        >
          {accentColor === colorValue && (
            <View className="absolute inset-0 items-center justify-center">
              <CheckIcon 
                size={16} 
                color="white" 
                strokeWidth={3} 
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    ));
  };

  const handleCustomColorSave = () => {
    // Basic hex color validation
    const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
    if (hexColorRegex.test(customColor)) {
      setPendingCustomColor(customColor);
      setIsColorPickerVisible(false);
      setIsConfirmModalVisible(true);
    } else {
      // Optional: Add error handling for invalid color
      alert('Please enter a valid hex color (e.g., #3B82F6)');
    }
  };

  const handleConfirmCustomColor = () => {
    addCustomColor(pendingCustomColor);
    setAccentColor(pendingCustomColor);
    setIsConfirmModalVisible(false);
  };

  return (
    <View className="overflow-hidden">
      <SettingItem
        icon={isDarkMode ? MoonIcon : SunIcon}
        label={t('darkMode')}
        description={t('darkModeDescription')}
        control={
          <SettingsSwitch
            value={isDarkMode}
            onValueChange={() => {
              toggleTheme();
            }}
            testID="dark-mode-switch"
          />
        }
      />
      
      <View className={`h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
      
      <SettingItem
        icon={PaletteIcon}
        label={t('colorPalette')}
        description={t('colorPalletteDescription')}
        control={
          <View className="flex-row flex-wrap items-center -mr-10 max-w-[70%]">
            {renderAccentColorOptions()}
            <TouchableOpacity 
              onPress={() => setIsColorPickerVisible(true)}
              className={`
                w-8 h-8 rounded-lg m-1 items-center justify-center 
                ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}
                border border-dashed
                ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}
              `}
            >
              <Text className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* Color Input Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isColorPickerVisible}
        onRequestClose={() => setIsColorPickerVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className={`
            w-4/5 p-6 rounded-xl 
            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
          `}>
            <Text className={`
              text-xl font-bold mb-4 
              ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}
            `}>
              Custom Color
            </Text>
            
            <TextInput 
              placeholder="Enter hex color (e.g., #3B82F6)"
              placeholderTextColor={isDarkMode ? '#6B7280' : '#9CA3AF'}
              value={customColor}
              onChangeText={setCustomColor}
              className={`
                p-3 rounded-lg mb-4
                ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-900'}
                border
                ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}
              `}
            />
            
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setIsColorPickerVisible(false)}
                className="p-3 rounded-lg"
              >
                <Text className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {t('cancel')}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={handleCustomColorSave}
                className={`
                  p-3 rounded-lg 
                  ${isDarkMode ? 'bg-blue-800' : 'bg-blue-500'}
                `}
              >
                <Text className="text-white">{t('save')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isConfirmModalVisible}
        onRequestClose={() => setIsConfirmModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className={`
            w-4/5 p-6 rounded-xl 
            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
          `}>
            <Text className={`
              text-xl font-bold mb-4 
              ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}
            `}>
              {t('addColorToPalette')}
            </Text>
            
            <View 
              className={`w-full h-20 rounded-lg mb-4 items-center justify-center`}
              style={{ backgroundColor: pendingCustomColor }}
            >
              <Text className="text-white text-lg">{pendingCustomColor}</Text>
            </View>
            
            <Text className={`
              text-base mb-4 text-center
              ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            `}>
              {t('addColorToPaletteConfirmation')}
            </Text>
            
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setIsConfirmModalVisible(false)}
                className="p-3 rounded-lg"
              >
                <Text className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {t('cancel')}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={handleConfirmCustomColor}
                className={`
                  p-3 rounded-lg 
                  ${isDarkMode ? 'bg-blue-800' : 'bg-blue-500'}
                `}
              >
                <Text className="text-white">{t('addToPalette')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
} 

export default ThemeSettingsSection;