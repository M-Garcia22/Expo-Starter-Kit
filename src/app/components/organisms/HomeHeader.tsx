import React from 'react';
import { View } from 'react-native';
import { HeaderText } from '../atoms/HeaderText';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

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
  const { t } = useI18n();

  return (
    <View 
      testID={testID} 
      className={`mb-8 items-center ${isDarkMode ? 'bg-gray-900' : ''}`}
    >
      <HeaderText>
        {t('appName')}
      </HeaderText>
    </View>
  );
} 

export default HomeHeader;