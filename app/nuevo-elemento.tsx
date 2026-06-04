import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { z } from 'zod';

import { useGymStore } from '../store/gymStore';

type ElementType = 'rutina' | 'entrenamiento' | 'objetivo';

const rutinaSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  exercises: z.string().min(1, 'Añade al menos un ejercicio'),
});

const entrenamientoSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  duration: z.coerce.number().positive('La duración debe ser mayor que 0'),
  notes: z.string().min(1, 'Añade una nota del entrenamiento'),
});

const objetivoSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  target: z.string().min(1, 'La meta no puede estar vacía'),
});

export default function NuevoElementoScreen() {
  const router = useRouter();

  const [type, setType] = useState<ElementType>('rutina');
  const [title, setTitle] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [target, setTarget] = useState('');
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const addRutina = useGymStore((state) => state.addRutina);
  const addEntrenamiento = useGymStore((state) => state.addEntrenamiento);
  const addObjetivo = useGymStore((state) => state.addObjetivo);

  const resetForm = () => {
    setTitle('');
    setExercises('');
    setDuration('');
    setNotes('');
    setTarget('');
    setErrors({});
  };

  const handleSubmit = () => {
    const now = new Date();

    if (type === 'rutina') {
      const result = rutinaSchema.safeParse({ title, exercises });

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setErrors({
          title: fieldErrors.title?.[0],
          exercises: fieldErrors.exercises?.[0],
        });

        return;
      }

      addRutina({
        id: Date.now().toString(),
        title,
        exercises: exercises
          .split(',')
          .map((exercise) => exercise.trim())
          .filter(Boolean),
        createdAt: now,
        updatedAt: now,
      });

      resetForm();
      router.replace('/rutinas');
    }

    if (type === 'entrenamiento') {
      const result = entrenamientoSchema.safeParse({
        title,
        duration,
        notes,
      });

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setErrors({
          title: fieldErrors.title?.[0],
          duration: fieldErrors.duration?.[0],
          notes: fieldErrors.notes?.[0],
        });

        return;
      }

      addEntrenamiento({
        id: Date.now().toString(),
        title,
        duration: Number(duration),
        notes,
        createdAt: now,
        updatedAt: now,
      });

      resetForm();
      router.replace('/entrenamientos');
    }

    if (type === 'objetivo') {
      const result = objetivoSchema.safeParse({ title, target });

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setErrors({
          title: fieldErrors.title?.[0],
          target: fieldErrors.target?.[0],
        });

        return;
      }

      addObjetivo({
        id: Date.now().toString(),
        title,
        target,
        completed: false,
        createdAt: now,
        updatedAt: now,
      });

      resetForm();
      router.replace('/objetivos');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#f5f7fb', padding: 20 }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Nuevo elemento
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 20 }}>
        {(['rutina', 'entrenamiento', 'objetivo'] as ElementType[]).map(
          (item) => (
            <Pressable
              key={item}
              onPress={() => {
                setType(item);
                resetForm();
              }}
              style={{
                backgroundColor: type === item ? '#2563eb' : '#ffffff',
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: type === item ? '#ffffff' : '#0f172a',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                }}
              >
                {item}
              </Text>
            </Pressable>
          )
        )}
      </View>

      <Text style={{ fontWeight: '600', marginBottom: 6 }}>Título</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        style={{
          backgroundColor: '#ffffff',
          padding: 14,
          borderRadius: 12,
          marginBottom: 6,
        }}
      />
      {errors.title && (
        <Text style={{ color: '#dc2626', marginBottom: 12 }}>
          {errors.title}
        </Text>
      )}

      {type === 'rutina' && (
        <>
          <Text style={{ fontWeight: '600', marginBottom: 6 }}>
            Ejercicios
          </Text>
          <TextInput
            value={exercises}
            onChangeText={setExercises}
            placeholder="Ej: Press banca, remo, sentadilla"
            multiline
            style={{
              backgroundColor: '#ffffff',
              padding: 14,
              borderRadius: 12,
              marginBottom: 6,
              minHeight: 90,
              textAlignVertical: 'top',
            }}
          />
          {errors.exercises && (
            <Text style={{ color: '#dc2626', marginBottom: 12 }}>
              {errors.exercises}
            </Text>
          )}
        </>
      )}

      {type === 'entrenamiento' && (
        <>
          <Text style={{ fontWeight: '600', marginBottom: 6 }}>
            Duración en minutos
          </Text>
          <TextInput
            value={duration}
            onChangeText={setDuration}
            placeholder="Ej: 60"
            keyboardType="numeric"
            style={{
              backgroundColor: '#ffffff',
              padding: 14,
              borderRadius: 12,
              marginBottom: 6,
            }}
          />
          {errors.duration && (
            <Text style={{ color: '#dc2626', marginBottom: 12 }}>
              {errors.duration}
            </Text>
          )}

          <Text style={{ fontWeight: '600', marginBottom: 6 }}>Notas</Text>
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder="Ej: Buen entrenamiento de pierna"
            multiline
            style={{
              backgroundColor: '#ffffff',
              padding: 14,
              borderRadius: 12,
              marginBottom: 6,
              minHeight: 90,
              textAlignVertical: 'top',
            }}
          />
          {errors.notes && (
            <Text style={{ color: '#dc2626', marginBottom: 12 }}>
              {errors.notes}
            </Text>
          )}
        </>
      )}

      {type === 'objetivo' && (
        <>
          <Text style={{ fontWeight: '600', marginBottom: 6 }}>Meta</Text>
          <TextInput
            value={target}
            onChangeText={setTarget}
            placeholder="Ej: Llegar a 80 kg en press banca"
            style={{
              backgroundColor: '#ffffff',
              padding: 14,
              borderRadius: 12,
              marginBottom: 6,
            }}
          />
          {errors.target && (
            <Text style={{ color: '#dc2626', marginBottom: 12 }}>
              {errors.target}
            </Text>
          )}
        </>
      )}

      <Pressable
        onPress={handleSubmit}
        style={{
          backgroundColor: '#2563eb',
          padding: 16,
          borderRadius: 14,
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '700' }}>
          Guardar
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}