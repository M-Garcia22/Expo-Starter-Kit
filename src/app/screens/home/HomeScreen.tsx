import React from 'react';
import { View, ScrollView, RefreshControl, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeHeader } from '../../components/organisms/HomeHeader';
import { FeaturesSection } from '../../components/organisms/FeaturesSection';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Bell, 
  Settings, 
  Palette,
  HelpCircle
} from 'lucide-react-native';
import { FeatureModal } from '../../components/molecules/FeatureModal';
import { FEATURES } from '../../constants/featureDescriptions';
import { useI18n } from '../../contexts/I18nContext';

/**
 * QuickAccessCard Component
 * 
 * @description Individual card component for quick access items
 */
interface QuickAccessCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  onPress: () => void;
  testID?: string;
}

function QuickAccessCard({ icon: Icon, title, subtitle, onPress, testID }: QuickAccessCardProps) {
  const { isDarkMode, accentColor } = useTheme();
  
  return (
    <Pressable 
      onPress={onPress}
      testID={testID}
      className={`
        flex-1 p-4 rounded-2xl shadow-sm
        ${isDarkMode ? 'bg-gray-800/90' : 'bg-white'}
      `}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1 space-y-1">
          <Text 
            className={`
              text-base font-semibold
              ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}
            `}
          >
            {title}
          </Text>
          <Text 
            className={`
              text-sm
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
            `}
          >
            {subtitle}
          </Text>
        </View>
        <View 
          className={`
            ml-4 p-3 rounded-xl
            ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}
          `}
        >
          <Icon 
            size={24} 
            color={accentColor} 
            strokeWidth={2}
          />
        </View>
      </View>
    </Pressable>
  );
}

/**
 * HomeScreen Component
 * 
 * @description Main home screen of the application that displays Expo template features
 * @returns {React.ReactElement} Rendered HomeScreen component
 */
export function HomeScreen(): React.ReactElement {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const { isDarkMode, accentColor } = useTheme();
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const { t } = useI18n();

  const onRefresh = React.useCallback(async (): Promise<void> => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleQuickAction = (action: string) => {
    setSelectedFeature(action);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedFeature(null);
  };

  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            colors={isDarkMode ? ['#ffffff'] : ['#000000']} 
            tintColor={isDarkMode ? '#ffffff' : '#000000'}
          />
        }
      >
        <View className={`p-4 ${isDarkMode ? 'bg-gray-900' : ''}`}>
          <HomeHeader testID="home-header" />
          
          <View className="mt-8 mb-6">
            <Text className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {t('quickAccess')}
            </Text>
            <Text className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('quickAccessDescription')}
            </Text>

            <View className="gap-4">
              <View className="flex-row gap-4">
                <QuickAccessCard
                  icon={Bell}
                  title={t('notifications')}
                  subtitle={t('checkYourAlerts')}
                  onPress={() => handleQuickAction('notifications')}
                  testID="notifications-quick-access"
                />
                <QuickAccessCard
                  icon={Settings}
                  title={t('settings')}
                  subtitle={t('appPreferences')}
                  onPress={() => handleQuickAction('settings')}
                  testID="settings-quick-access"
                />
              </View>

              <View className="flex-row gap-4">
                <QuickAccessCard
                  icon={Palette}
                  title={t('themeSettings')}
                  subtitle={t('customizeLook')}
                  onPress={() => handleQuickAction('theme')}
                  testID="theme-quick-access"
                />
                <QuickAccessCard
                  icon={HelpCircle}
                  title="Help"
                  subtitle="Get support"
                  onPress={() => handleQuickAction('help')}
                  testID="help-quick-access"
                />
              </View>
            </View>
          </View>

          <FeaturesSection testID="features-section" />
        </View>
      </ScrollView>

      <FeatureModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        feature={selectedFeature ? FEATURES[selectedFeature] : null}
      />
    </SafeAreaView>
  );
} 

export default HomeScreen;