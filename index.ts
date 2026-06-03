// Función de Expo para registrar el componente raíz de la aplicación
import { registerRootComponent } from 'expo';

// Importa el componente principal App
import App from './App';

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App);
// También garantiza que, ya sea en Expo Go o en un build nativo,
// el entorno quede configurado correctamente
// Registra App como punto de entrada de la aplicación
registerRootComponent(App);
