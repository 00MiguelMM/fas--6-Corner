import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';

import { lightTheme, darkTheme } from '../constants/theme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const currentTheme =
    colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: currentTheme.colors.background,
          },
        }}
      />
    </PaperProvider>
  );
}