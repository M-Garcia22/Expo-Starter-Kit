import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from '../../app/contexts/ThemeContext';

/**
 * Layout for all non-tab routes to ensure smooth transitions
 */
export default function NonTabsLayout() {
  const { isDarkMode } = useTheme();
  
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: isDarkMode ? '#1F2937' : 'white',
        },
        headerTintColor: isDarkMode ? 'white' : 'black',
        headerShadowVisible: false,
        animation: 'slide_from_right',
        animationDuration: 300,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        presentation: 'card',
        contentStyle: {
          backgroundColor: isDarkMode ? '#111827' : '#F9FAFB',
        },
      }}
    >
      <Stack.Screen 
        name="example" 
        options={{
          title: 'Example',
        }} 
      />
      <Stack.Screen 
        name="detail" 
        options={{
          title: 'Detail',
        }} 
      />
    </Stack>
  );
} 