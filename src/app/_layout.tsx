import React from 'react';
import "../global.css";
import { Slot, Stack } from "expo-router";
import { NetworkProvider } from '../app/contexts/NetworkContext';
import { ThemeProvider } from '../app/contexts/ThemeContext';

export default function Layout() {
  return (
    <NetworkProvider>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationDuration: 300,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            presentation: 'card',
            contentStyle: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </ThemeProvider>
    </NetworkProvider>
  );
}
