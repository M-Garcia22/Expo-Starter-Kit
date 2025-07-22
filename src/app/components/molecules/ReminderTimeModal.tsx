import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Clock } from 'lucide-react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';

interface ReminderTimeModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (selectedTime: Date) => void;
}

/**
 * Modal for selecting reminder notification time
 * 
 * @param {ReminderTimeModalProps} props - Component props
 * @returns {React.ReactElement} Reminder time modal
 */
export function ReminderTimeModal({ 
  isVisible, 
  onClose, 
  onSave 
}: ReminderTimeModalProps) {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');
  const { isDarkMode } = useTheme();
  const { t } = useI18n();

  const handleTimeChange = (event: any, time?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    
    if (event.type === 'set' && time) {
      setSelectedTime(time);
      if (Platform.OS === 'android') {
        onSave(time);
        onClose();
      }
    } else if (Platform.OS === 'android') {
      onClose();
    }
  };

  const handleSave = () => {
    onSave(selectedTime);
    onClose();
  };

  React.useEffect(() => {
    if (isVisible && Platform.OS === 'android') {
      setShowPicker(true);
    }
  }, [isVisible]);

  if (Platform.OS === 'android') {
    return (
      <>
        {isVisible && showPicker && (
          <DateTimePicker
            mode="time"
            display="spinner"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        )}
      </>
    );
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View 
          className={`
            w-11/12 rounded-xl p-6 items-center
            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
          `}
        >
          <View className="flex-row items-center mb-8">
            <Clock size={24} className="mr-2" color={isDarkMode ? '#D1D5DB' : '#4B5563'} />
            <Text className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              {t('setReminderTime')}
            </Text>
          </View>

          <View className="w-full mb-8">
            <DateTimePicker
              mode="time"
              display="spinner"
              value={selectedTime}
              onChange={handleTimeChange}
              textColor={isDarkMode ? '#fff' : '#000'}
              className="h-[180px] w-full"
            />
          </View>

          <View className="flex-row justify-between w-full">
            <TouchableOpacity 
              onPress={onClose} 
              className={`
                px-6 py-3 rounded-lg mr-2
                ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}
              `}
            >
              <Text className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {t('cancel')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleSave} 
              className="bg-blue-500 px-6 py-3 rounded-lg"
            >
              <Text className="text-white font-medium">{t('save')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ReminderTimeModal;