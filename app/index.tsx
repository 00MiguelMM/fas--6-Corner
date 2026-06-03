// Componente de redirección de expo-router
import { Redirect } from 'expo-router';

// Pantalla de entrada: redirige automáticamente a la pestaña de rutinas
export default function Index() {
  // Envía al usuario a /rutinas sin renderizar contenido propio
  return <Redirect href="/rutinas" />;
}
