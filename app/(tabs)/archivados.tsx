import { ScrollView, Text, View } from 'react-native';

import { useGymStore } from '../../store/gymStore';

export default function ArchivadosScreen() {
  const rutinas = useGymStore((state) => state.rutinas);
  const entrenamientos = useGymStore((state) => state.entrenamientos);
  const objetivos = useGymStore((state) => state.objetivos);

  const rutinasArchivadas = rutinas.filter((rutina) => rutina.archived);
  const entrenamientosArchivados = entrenamientos.filter(
    (entrenamiento) => entrenamiento.archived
  );
  const objetivosArchivados = objetivos.filter((objetivo) => objetivo.archived);

  const totalArchivados =
    rutinasArchivadas.length +
    entrenamientosArchivados.length +
    objetivosArchivados.length;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fb' }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Archivados
      </Text>

      {totalArchivados === 0 && (
        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            No hay elementos archivados
          </Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>
            Cuando archives rutinas, entrenamientos u objetivos, aparecerán aquí.
          </Text>
        </View>
      )}

      {rutinasArchivadas.map((rutina) => (
        <View key={rutina.id} style={{ backgroundColor: '#fff', padding: 16, borderRadius: 14, marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{rutina.title}</Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>Rutina archivada</Text>
        </View>
      ))}

      {entrenamientosArchivados.map((entrenamiento) => (
        <View key={entrenamiento.id} style={{ backgroundColor: '#fff', padding: 16, borderRadius: 14, marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            {entrenamiento.title}
          </Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>
            Entrenamiento archivado
          </Text>
        </View>
      ))}

      {objetivosArchivados.map((objetivo) => (
        <View key={objetivo.id} style={{ backgroundColor: '#fff', padding: 16, borderRadius: 14, marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{objetivo.title}</Text>
          <Text style={{ color: '#64748b', marginTop: 6 }}>Objetivo archivado</Text>
        </View>
      ))}
    </ScrollView>
  );
}