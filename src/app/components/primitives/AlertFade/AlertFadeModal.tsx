import React from 'react';
import { 
  View, 
  Text, 
  Modal, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import Animated, { 
  FadeIn, 
  FadeOut,
  SlideInUp,
  SlideOutDown
} from 'react-native-reanimated';
import { useTheme } from '../../../contexts/ThemeContext';
import { XIcon } from 'lucide-react-native';

interface AlertFadeModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  emptyStateMessage?: string;
}

export function AlertFadeModal({ 
  isVisible, 
  onClose, 
  title, 
  children, 
  emptyStateMessage = 'No items to display' 
}: AlertFadeModalProps) {
  const { isDarkMode } = useTheme();

  const hasChildren = React.Children.count(children) > 0;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <Animated.View 
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        className="flex-1 justify-center items-center bg-black/50"
      >
        <Animated.View 
          entering={SlideInUp.duration(300)}
          exiting={SlideOutDown.duration(300)}
          className={`w-11/12 rounded-xl p-4 max-h-[70%] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <XIcon 
                size={24} 
                color={isDarkMode ? '#D1D5DB' : '#4B5563'} 
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {hasChildren ? (
              children
            ) : (
              <View className="items-center justify-center">
                <Text className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {emptyStateMessage || 'No items to display'}
                </Text>
              </View>
            )}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

export default AlertFadeModal;