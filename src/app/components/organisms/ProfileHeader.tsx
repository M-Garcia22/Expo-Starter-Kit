import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Edit2, Share2 } from 'lucide-react-native';
import { Avatar } from '../atoms/Avatar';
import { ProfileText } from '../atoms/ProfileText';
import { ProfileAction } from '../molecules/ProfileAction';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

interface ProfileHeaderProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  onEdit?: () => void;
  onShare?: () => void;
  testID?: string;
}

/**
 * Profile header component that displays user information and actions
 * 
 * @param {ProfileHeaderProps} props - Component props
 * @returns {React.ReactElement} Profile header component
 */
export function ProfileHeader({ 
  name, 
  title, 
  bio, 
  imageUrl,
  onEdit,
  onShare,
  testID 
}: ProfileHeaderProps) {
  const { isDarkMode } = useTheme();
  const { t } = useI18n();

  return (
    <View 
      testID={testID} 
      className={`items-center px-6 py-8 rounded-2xl shadow-md mx-4 mt-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <Avatar 
        imageUrl={imageUrl} 
        size={140} 
        testID="profile-avatar" 
        className="border-4 border-blue-500"
      />
      
      <View className="mt-6 items-center w-full max-w-[320px]">
        <ProfileText 
          variant="name" 
          testID="profile-name" 
          className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          {name}
        </ProfileText>
        <ProfileText 
          variant="title" 
          testID="profile-title" 
          className={`mt-1 text-lg text-blue-600 font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}
        >
          {title}
        </ProfileText>
        <Text 
          testID="profile-bio" 
          className={`mt-3 text-center text-gray-600 leading-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          numberOfLines={3}
        >
          {bio}
        </Text>
      </View>

      <View className="flex-row mt-8 space-x-4">
        <TouchableOpacity 
          onPress={onEdit || (() => {})}
          className={`bg-blue-500 px-6 py-3 mr-2 rounded-xl ${isDarkMode ? 'bg-blue-800' : ''}`}
        >
          <View className="flex-row items-center">
            <Edit2 size={20} color="white" />
            <Text className="text-white ml-2">{t('editProfile')}</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={onShare || (() => {})}
          className={`bg-gray-100 px-6 py-3 rounded-xl ${isDarkMode ? 'bg-gray-700' : ''}`}
        >
          <View className="flex-row items-center">
            <Share2 size={20} color={isDarkMode ? 'white' : 'black'} />
            <Text className={`ml-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t('share')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
} 

export default ProfileHeader;