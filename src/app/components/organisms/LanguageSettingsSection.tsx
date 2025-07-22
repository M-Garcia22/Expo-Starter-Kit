import React from 'react';
import { View, Text } from 'react-native';
import { Globe } from 'lucide-react-native';
import { SettingItem } from '../molecules/SettingItem';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

/**
 * Language settings section component for toggling app language
 *
 * @returns {React.ReactElement} Language settings section component
 */
export function LanguageSettingsSection() {
  const { isDarkMode } = useTheme();
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <View className="overflow-hidden">
      <SettingItem
        icon={Globe}
        label={t('language')}
        description={t('languageDescription')}
        control={
          <Text className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>
            {language === 'en' ? t('english') : t('spanish')}
          </Text>
        }
        onPress={toggleLanguage}
      />
    </View>
  );
}

export default LanguageSettingsSection;