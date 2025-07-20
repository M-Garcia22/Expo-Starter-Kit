import { useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { Alert, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

/**
 * Custom hook to manage notification permissions and settings
 * @returns {Object} Notification management utilities
 */
export function useNotifications() {
  const [pushEnabled, setPushEnabled] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(false);

  /**
   * Comprehensive notifications configuration
   * @returns {Promise<boolean>} Whether notifications are configured successfully
   */
  const configureNotifications = async () => {
    try {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
          },
          android: {
            priority: 'high',
          }
        });
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission Required', 
          'Please enable notifications in your device settings to receive updates.'
        );
        return false;
      }

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'Default Channel',
          importance: Notifications.AndroidImportance.HIGH,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      return true;
    } catch (error) {
      Alert.alert('Notification Error', 'Failed to configure notifications');
      return false;
    }
  };

  /**
   * Send a test notification
   * @returns {Promise<void>}
   */
  const showTestNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Notifications Enabled 🔔',
          body: 'You will now receive important updates and reminders.',
          sound: true,
        },
        trigger: null,
      });
    } catch (error) {
      Alert.alert('Notification Error', 'Could not send test notification');
    }
  };

  /**
   * Handle push notification toggle
   * @param {boolean} value - Whether to enable push notifications
   */
  const handlePushToggle = async (value: boolean) => {
    try {
      setPushEnabled(value);
      if (value) {
        const permissionGranted = await configureNotifications();
        if (permissionGranted) {
          await showTestNotification();
        } else {
          setPushEnabled(false);
        }
      }
    } catch (error) {
      setPushEnabled(false);
    }
  };

  useEffect(() => {
    configureNotifications();
  }, []);

  return {
    pushEnabled,
    reminderEnabled,
    handlePushToggle,
    setReminderEnabled,
    configureNotifications,
    showTestNotification,
  };
}

export default { useNotifications };