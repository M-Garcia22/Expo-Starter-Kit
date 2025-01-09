import React from 'react';
import { Image, View } from 'react-native';

interface AvatarProps {
  imageUrl?: string;
  size?: number;
  testID?: string;
  className?: string;
}

export function Avatar({ 
  imageUrl, 
  size = 80, 
  testID,
  className = ''
}: AvatarProps) {
  const placeholderImageUrl = imageUrl 
    ? imageUrl 
    : `https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff&size=256`;

  return (
    <View 
      testID={testID} 
      className={`rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        source={{ uri: placeholderImageUrl }}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  );
} 

export default Avatar;