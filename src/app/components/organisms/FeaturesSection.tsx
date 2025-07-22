import React from 'react';
import { View } from 'react-native';
import { Languages, Rocket, Shield, Smartphone } from 'lucide-react-native';
import { FeatureCard } from '../molecules/FeatureCard';
import { SectionTitle } from '../atoms/SectionTitle';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

interface FeaturesSectionProps {
  testID?: string;
}

/**
 * Features section component that displays all feature cards
 * 
 * @param {FeaturesSectionProps} props - Component props
 * @returns {React.ReactElement} Features section component
 */
export function FeaturesSection({ testID }: FeaturesSectionProps) {
  const { isDarkMode, accentColor } = useTheme();
  const { t } = useI18n();

  return (
    <View 
      testID={testID} 
      className={isDarkMode ? 'bg-gray-900' : ''}
    >
      <SectionTitle>{t('keyFeatures')}</SectionTitle>
      <View className="space-y-4">
        <FeatureCard
          icon={Rocket}
          title={t('quickStart')}
          description={t('quickStartDesc')}
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-blue-50"}
          iconColor={accentColor}
          testID="quick-start-feature"
        />
        
        <FeatureCard
          icon={Shield}
        title={t('bestPractices')}
          description={t('bestPracticesDesc')}
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-purple-50"}
          iconColor={accentColor}
          testID="best-practices-feature"
        />

        <FeatureCard
          icon={Smartphone}
          title={t('crossPlatform')}
          description={t('crossPlatformDesc')}
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-green-50"}
          iconColor={accentColor}
          testID="cross-platform-feature"
        />

        <FeatureCard
          icon={Languages}
          title={t('multiLanguageSupport')}
          description={t('multiLanguageSupportDesc')}
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-green-50"}
          iconColor={accentColor}
          testID="multi-language-support-feature"
        />
      </View>
    </View>
  );
} 

export default FeaturesSection;