import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import contextMetadataRaw from '../../../contexts/context-metadata.json';
import { useTheme } from '../../../contexts/ThemeContext';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react-native';

interface ContextAnnotation {
  key: string;
  type: string;
  description: string;
}

interface ContextMetadata {
  name: string;
  description: string;
  annotations: ContextAnnotation[];
}

const contextMetadata = contextMetadataRaw as Record<string, ContextMetadata>;

/**
 * Utility component to view and display current context values in a detailed, readable format
 * @returns {React.ReactElement} Context viewer component
 */
export function ContextViewer() {
  const { isDarkMode } = useTheme();
  const [expandedContexts, setExpandedContexts] = React.useState<Record<string, boolean>>({});

  const toggleContextExpansion = (key: string) => {
    setExpandedContexts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderContextDetails = (key: string, value: ContextMetadata) => {
    const isExpanded = expandedContexts[key];

    return (
      <View 
        key={key} 
        className={`mb-4 rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
      >
        <TouchableOpacity 
          onPress={() => toggleContextExpansion(key)}
          className="flex-row justify-between items-center p-4"
        >
          <View>
            <Text className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {key}
            </Text>
            <Text className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {value.description || 'No description available'}
            </Text>
          </View>
          {isExpanded ? (
            <ChevronDownIcon 
              size={24} 
              color={isDarkMode ? '#D1D5DB' : '#4B5563'} 
            />
          ) : (
            <ChevronRightIcon 
              size={24} 
              color={isDarkMode ? '#D1D5DB' : '#4B5563'} 
            />
          )}
        </TouchableOpacity>

        {isExpanded && (
          <View className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {value.annotations && value.annotations.length > 0 ? (
              value.annotations.map((annotation, index) => (
                <View 
                  key={index} 
                  className={`mb-3 p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                >
                  <Text className={`font-bold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {annotation.key}
                  </Text>
                  <Text className={`text-sm mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Type: {annotation.type}
                  </Text>
                  <Text className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    {annotation.description || 'No description available'}
                  </Text>
                </View>
              ))
            ) : (
              <Text className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No annotations available
              </Text>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView 
      className={`flex-1 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-6">
        <Text className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Context Metadata
        </Text>
        <Text className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Explore detailed information about application contexts
        </Text>
      </View>

      {Object.entries(contextMetadata).map(([key, value]) => 
        renderContextDetails(key, value)
      )}
    </ScrollView>
  );
} 

export default ContextViewer;