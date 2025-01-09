import React from 'react';
import { Text } from 'react-native';

interface ProfileTextProps {
  variant: 'name' | 'title' | 'info';
  children: React.ReactNode;
  className?: string;
  testID?: string;
}

/**
 * Profile text component with different variants for different types of text
 * 
 * @param {ProfileTextProps} props - Component props
 * @returns {React.ReactElement} Profile text component
 */
export function ProfileText({ variant, children, className = '', testID }: ProfileTextProps) {
  const styles = {
    name: 'text-2xl font-bold text-gray-900',
    title: 'text-base text-gray-600',
    info: 'text-sm text-gray-500',
  };

  return (
    <Text 
      testID={testID}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </Text>
  );
} 

export default ProfileText;