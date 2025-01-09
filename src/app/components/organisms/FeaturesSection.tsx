import React from 'react';
import { View } from 'react-native';
import { Rocket, Shield, Smartphone } from 'lucide-react-native';
import { FeatureCard } from '../molecules/FeatureCard';
import { SectionTitle } from '../atoms/SectionTitle';
import { useTheme } from '../../contexts/ThemeContext';

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

  return (
    <View 
      testID={testID} 
      className={isDarkMode ? 'bg-gray-900' : ''}
    >
      <SectionTitle>Key Features</SectionTitle>
      <View className="space-y-4">
        <FeatureCard
          icon={Rocket}
          title="Quick Start"
          description="Pre-configured with TypeScript, NativeWind, and Navigation"
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-blue-50"}
          iconColor={accentColor}
          testID="quick-start-feature"
        />
        
        <FeatureCard
          icon={Shield}
          title="Best Practices"
          description="Follows modern React Native development standards"
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-purple-50"}
          iconColor={accentColor}
          testID="best-practices-feature"
        />

        <FeatureCard
          icon={Smartphone}
          title="Cross Platform"
          description="Works seamlessly on iOS, Android, and Web"
          backgroundColor={isDarkMode ? "bg-gray-800" : "bg-green-50"}
          iconColor={accentColor}
          testID="cross-platform-feature"
        />
      </View>
    </View>
  );
} 

export default FeaturesSection;