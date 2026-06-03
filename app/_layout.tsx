// Navegación en pila de expo-router (pantallas apiladas)
import { Stack } from 'expo-router';
// Proveedor de tema y componentes de Material Design (React Native Paper)
import { PaperProvider } from 'react-native-paper';
// Hook para detectar si el dispositivo usa tema claro u oscuro
import { useColorScheme } from 'react-native';

// Temas personalizados de la aplicación
import { lightTheme, darkTheme } from '../constants/theme';

// Layout raíz: envuelve toda la app con tema y navegación
export default function RootLayout() {
  // Obtiene 'light', 'dark' o null según la preferencia del sistema
  const colorScheme = useColorScheme();

  // Selecciona el tema oscuro si el sistema está en dark mode; si no, el claro
  const currentTheme =
    colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    // Provee el contexto de Paper a todos los componentes hijos
    <PaperProvider>
      {/* Stack de navegación sin cabecera visible por defecto */}
      <Stack
        screenOptions={{
          // Oculta la barra de navegación superior en todas las pantallas
          headerShown: false,
          contentStyle: {
            // Aplica el color de fondo del tema activo al contenido
            backgroundColor: currentTheme.colors.background,
          },
        }}
      />
    </PaperProvider>
  );
}
