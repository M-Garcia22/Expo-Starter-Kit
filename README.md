# Applab App Template

## 🌟 Overview

An open-source mobile application template by Applab Design, built using cutting-edge mobile development technologies. This template provides a robust starting point for React Native developers looking to kickstart their mobile app development.

## 🚀 Tech Stack

- **Framework**: Expo
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **State Management**: React Context API
- **Navigation**: Expo Routing

## 📂 Project Structure

```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── atoms/            # Smallest, most basic components
│   │   ├── molecules/        # Slightly more complex components
│   │   ├── organisms/        # Complex, composed components
│   │   └── primitives/       # Special-purpose components
│   ├── contexts/             # Global state management
│   ├── hooks/                # Custom React hooks
│   ├── screens/              # Full-page screen components
│   └── types/                # TypeScript type definitions
├── types/                    # Additional type definitions
└── global.css                # Global styling
```

## 🔑 Key Features

- Modular component architecture
- Responsive design with NativeWind
- Context-based state management
- Accessibility-focused
- Platform-agnostic components

## 🛠 Development Conventions

- PascalCase for components
- camelCase for variables and functions
- Strict TypeScript typing
- Comprehensive error handling
- Performance-optimized rendering

## 🌐 Context Annotations

Our project uses inline comment-based context annotations to provide clear, standardized documentation for context providers.

### Annotation Format

Context annotations follow this pattern:
```
// @context: propertyName - type - description
```

### Why Context Annotations?

1. **Self-Documenting Code**: Inline comments provide immediate context
2. **Easy Documentation**: Annotations can be parsed for automatic documentation
3. **Developer Experience**: Quickly understand context properties

### Real-World Examples

#### Network Context
```typescript
// @context: isConnected - boolean - true if the device is connected to the internet, false otherwise
// @context: connectionType - string - the type of connection the device is using (wifi, cellular, etc.)
// @context: networkDetails - NetInfoState - the details of the network connection
const NetworkContext = createContext<NetworkContextType>({
  isConnected: true,
  connectionType: null,
  networkDetails: null
});
```

#### Theme Context
```typescript
// @context: isDarkMode - boolean - true if the device is in dark mode, false otherwise
// @context: toggleTheme - function - toggles the theme between dark and light
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {}
});
```

### Generating Context Metadata

Context metadata is automatically generated using a custom script:

```sh
# Manually generate context metadata
node scripts/generate-context-metadata.js

# Or simply start the app (script runs automatically)
npm start
```

## 🏁 Getting Started

```sh
# Clone the repository
git clone https://github.com/applab-design/app-template.git

# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android
```

## 📦 Available Scripts

- `npm start`: Start the Expo development server (generates context metadata)
- `npm run ios`: Run on iOS simulator
- `npm run android`: Run on Android emulator

## 📝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🌈 About Applab Design

Applab Design is committed to creating open-source tools that empower developers to build amazing mobile applications quickly and efficiently.
