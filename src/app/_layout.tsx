import React from 'react';
import "../global.css";
import { Slot, Stack } from "expo-router";
import { NetworkProvider } from '../app/contexts/NetworkContext';
import { ThemeProvider } from '../app/contexts/ThemeContext';
import { I18nProvider } from '../app/contexts/I18nContext';

export default function Layout() {
  return (
    <I18nProvider>
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
    </I18nProvider>
  );
}
