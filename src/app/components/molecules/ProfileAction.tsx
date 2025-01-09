import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface ProfileActionProps {
  icon: LucideIcon;
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  testID?: string;
  className?: string;
}

/**
 * Profile action button component
 * 
 * @param {ProfileActionProps} props - Component props
 * @returns {React.ReactElement} Profile action component
 */
export function ProfileAction({ 
  icon: Icon, 
  label, 
  onPress, 
  variant = 'primary',
  testID,
  className = ''
}: ProfileActionProps) {
  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-100 text-gray-800'
  };

  return (
    <Pressable 
      onPress={onPress} 
      testID={testID}
      className={`flex-row items-center justify-center px-4 py-2 rounded-lg ${variantStyles[variant]} ${className}`}
    >
      <View className="mr-3">
        <Icon 
          size={20} 
          color={variant === 'primary' ? '#FFFFFF' : '#1F2937'} 
          className={variant === 'primary' ? 'text-white' : 'text-gray-800'} 
        />
      </View>
      <Text 
        className={`font-semibold ${variantStyles[variant]}`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default ProfileAction;