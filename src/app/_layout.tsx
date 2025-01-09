import React from 'react';
import "../global.css";
import { Slot } from "expo-router";
import { NetworkProvider } from '../app/contexts/NetworkContext';
import { ThemeProvider } from '../app/contexts/ThemeContext';

export default function Layout() {
  return (
    <NetworkProvider>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </NetworkProvider>
  );
}
