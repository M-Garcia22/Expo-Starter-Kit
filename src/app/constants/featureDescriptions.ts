export const FEATURES = {
  notifications: {
    title: 'Notifications',
    description: 'Configure push notifications and daily reminders to stay updated with important information.',
    details: [
      {
        title: 'Push Notifications',
        content: 'Enable or disable push notifications for important updates. Manage your notification permissions and settings directly from the app.'
      },
      {
        title: 'Reminder Notifications',
        content: 'Set up daily reminders at your preferred time. Schedule custom notifications that repeat daily to help you stay on track.'
      },
      {
        title: 'Permission Management',
        content: 'Easily test and manage notification permissions. The app guides you through the process of granting or revoking notification access.'
      }
    ]
  },
  settings: {
    title: 'Settings',
    description: 'Access app settings and debug tools to customize your experience.',
    details: [
      {
        title: 'App Configuration',
        content: 'Manage core app settings including notifications, theme preferences, and debug options.'
      },
      {
        title: 'Debug Menu',
        content: 'Access developer tools and debug features to test app functionality and storage.'
      },
      {
        title: 'Storage Management',
        content: 'View and manage app storage through the debug menu when enabled.'
      }
    ]
  },
  theme: {
    title: 'Theme',
    description: 'Customize the app\'s appearance with dark mode and custom color palettes.',
    details: [
      {
        title: 'Dark Mode',
        content: 'Toggle between light and dark themes to match your preference and reduce eye strain.'
      },
      {
        title: 'Color Palette',
        content: 'Choose from pre-defined accent colors or create your own custom colors to personalize the app\'s appearance.'
      },
      {
        title: 'Custom Colors',
        content: 'Add your own hex color codes to create a unique color palette that matches your style.'
      }
    ]
  },
  help: {
    title: 'Help & Support',
    description: 'Find help resources and access app documentation.',
    details: [
      {
        title: 'App Documentation',
        content: 'Access guides and documentation about app features, including theme customization and notification settings.'
      },
      {
        title: 'Settings Guide',
        content: 'Learn how to configure app settings, manage notifications, and customize themes.'
      },
      {
        title: 'Debug Support',
        content: 'Access debug tools and storage information when troubleshooting is needed.'
      }
    ]
  }
}; 

export default FEATURES;