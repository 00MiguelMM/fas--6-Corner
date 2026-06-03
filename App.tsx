// Componente de barra de estado de Expo (claro/oscuro según el sistema)
import { StatusBar } from 'expo-status-bar';
// Componentes básicos de React Native para layout y texto
import { StyleSheet, Text, View } from 'react-native';

// Componente raíz alternativo (legacy); la app usa expo-router desde app/_layout.tsx
export default function App() {
  return (
    // Contenedor principal que ocupa toda la pantalla
    <View style={styles.container}>
      {/* Texto de bienvenida para desarrollo */}
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* Barra de estado con estilo automático según el tema del dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos reutilizables del componente App
const styles = StyleSheet.create({
  container: {
    // Ocupa todo el espacio disponible en la pantalla
    flex: 1,
    // Fondo blanco
    backgroundColor: '#fff',
    // Centra el contenido horizontalmente
    alignItems: 'center',
    // Centra el contenido verticalmente
    justifyContent: 'center',
  },
});
