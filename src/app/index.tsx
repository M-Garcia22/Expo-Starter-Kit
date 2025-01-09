import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabNavigation } from "./components/BottomTabNavigation";
import { DebugBottomNavigation } from "./components/primitives/debug/DebugBottomNavigation";
import { ThemeProvider } from './contexts/ThemeContext';

export default function Page() {
  const { bottom } = useSafeAreaInsets();
  const [bottomMenuEnabled, setBottomMenuEnabled] = useState(false);

  useEffect(() => {
  }, [bottomMenuEnabled]);
  
  const handleBottomMenuToggle = useCallback((value: boolean) => {
    setBottomMenuEnabled(value);
  }, []);
  
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <BottomTabNavigation 
          bottomMenuEnabled={bottomMenuEnabled}
          onBottomMenuToggle={handleBottomMenuToggle}
        />
        {bottomMenuEnabled && (
          <View 
            style={[
              styles.debugNavigation, 
              { 
                bottom: Platform.OS === 'ios' ? bottom : 0,
                height: 120 
              }
            ]}
          >
            <DebugBottomNavigation />
          </View>
        )}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  debugNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
});