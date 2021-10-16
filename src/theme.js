import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#f8f8ff',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System'
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  backgroundColors: {
    appBar: '#24292e',
    main: '#e1e4e8',
    repositoryItem: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttonPrimary: {
    backgroundColor: '#0366d6',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#586069',
    marginBottom: 10,
  },
  inputFieldError: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d73a4a',
  }
};

export default theme;