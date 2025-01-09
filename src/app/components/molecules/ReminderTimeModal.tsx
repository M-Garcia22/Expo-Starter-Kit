import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Clock } from 'lucide-react-native';

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

  const handleTimeChange = (event: any, time?: Date) => {
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleSave = () => {
    onSave(selectedTime);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white w-11/12 rounded-xl p-6 items-center">
          <View className="flex-row items-center mb-4">
            <Clock size={24} className="mr-2 text-blue-500" />
            <Text className="text-xl font-semibold text-gray-800">
              Set Reminder Time
            </Text>
          </View>

          <DateTimePicker
            mode="time"
            display="spinner"
            value={selectedTime}
            onChange={handleTimeChange}
            className="w-full"
          />

          <View className="flex-row justify-between w-full mt-4">
            <TouchableOpacity 
              onPress={onClose} 
              className="bg-gray-200 px-4 py-2 rounded-lg mr-2"
            >
              <Text className="text-gray-800">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleSave} 
              className="bg-blue-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
} 

export default ReminderTimeModal;