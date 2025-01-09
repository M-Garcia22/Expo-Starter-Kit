import React from 'react';
import { View, Text, Modal, Pressable, ScrollView, Animated } from 'react-native';
import { X } from 'lucide-react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface FeatureModalProps {
  isVisible: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    details: {
      title: string;
      content: string;
    }[];
  } | null;
}

/**
 * FeatureModal Component
 * 
 * @description A modal component that displays detailed information about a selected feature
 * @param {FeatureModalProps} props - Component props
 * @returns {React.ReactElement} Feature modal component
 */
export function FeatureModal({ isVisible, onClose, feature }: FeatureModalProps): React.ReactElement {
  const { isDarkMode } = useTheme();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  if (!feature) return null;

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      animationType="none"
    >
      <View className="flex-1 justify-end">
        <Animated.View 
          style={{
            opacity: fadeAnim,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Pressable 
            className="flex-1" 
            onPress={onClose}
          />
        </Animated.View>
        
        <Animated.View 
          style={{
            opacity: fadeAnim,
          }}
        >
          <View className={`rounded-t-3xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6 max-h-[80%]`}>
            <View className="flex-row justify-between items-center mb-6">
              <Text className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {feature.title}
              </Text>
              <Pressable
                onPress={onClose}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                <X size={20} color={isDarkMode ? '#D1D5DB' : '#4B5563'} />
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text className={`text-base mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </Text>

              <View className="space-y-6">
                {feature.details.map((detail, index) => (
                  <View key={index}>
                    <Text className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {detail.title}
                    </Text>
                    <Text className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {detail.content}
                    </Text>
                  </View>
                ))}
              </View>

              <View className="h-6" />
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
} 

export default FeatureModal;