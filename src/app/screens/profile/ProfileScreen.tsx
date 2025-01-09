import React from 'react';
import { ScrollView, View, Alert, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileHeader } from '../../components/organisms/ProfileHeader';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * ProfileScreen Component
 * 
 * @description Profile screen that displays user information and actions
 * @returns {React.ReactElement} Profile screen component
 */
export function ProfileScreen(): React.ReactElement {
  const { isDarkMode } = useTheme();

  const handleEdit = () => {
    Alert.alert('Edit Profile', 'Edit profile functionality will be implemented here');
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out my profile!',
        title: 'Share Profile',
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share profile');
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <ScrollView className="flex-1">
        <ProfileHeader
          name="John Doe"
          title="Software Developer"
          bio="Passionate about building great mobile apps with React Native. Love to explore new technologies and share knowledge with the community."
          onEdit={handleEdit}
          onShare={handleShare}
          testID="profile-header"
        />
      </ScrollView>
    </SafeAreaView>
  );
} 

export default ProfileScreen;