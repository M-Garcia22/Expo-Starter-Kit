import React from 'react';
import { ScrollView, View, Alert, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileHeader } from '../../components/organisms/ProfileHeader';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

/**
 * ProfileScreen Component
 * 
 * @description Profile screen that displays user information and actions
 * @returns {React.ReactElement} Profile screen component
 */
export function ProfileScreen(): React.ReactElement {
  const { isDarkMode } = useTheme();
  const { t } = useI18n();

  const handleEdit = () => {
    const alertTitle = t('editProfile');
    const alertMessage = t('editProfileAlertMessage');
    Alert.alert(alertTitle, alertMessage);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: t('shareProfileMessage'),
        title: t('shareProfileTitle'),
      });
    } catch (error) {
      Alert.alert(t('error'), t('shareProfileError'));
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <ScrollView className="flex-1">
        <ProfileHeader
          name="John Doe"
          title={t('profileHeaderTitle')}
          bio={t('profileHeaderBio')}
          onEdit={handleEdit}
          onShare={handleShare}
          testID="profile-header"
        />
      </ScrollView>
    </SafeAreaView>
  );
} 

export default ProfileScreen;