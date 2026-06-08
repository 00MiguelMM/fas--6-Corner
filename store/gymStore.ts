import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { Entrenamiento, Objetivo, Rutina } from '../types';

interface GymStore {
  rutinas: Rutina[];
  entrenamientos: Entrenamiento[];
  objetivos: Objetivo[];

  addRutina: (rutina: Rutina) => void;
  deleteRutina: (id: string) => void;
  archiveRutina: (id: string) => void;

  addEntrenamiento: (entrenamiento: Entrenamiento) => void;
  deleteEntrenamiento: (id: string) => void;
  archiveEntrenamiento: (id: string) => void;

  addObjetivo: (objetivo: Objetivo) => void;
  deleteObjetivo: (id: string) => void;
  archiveObjetivo: (id: string) => void;

  toggleObjetivo: (id: string) => void;
}

export const useGymStore = create<GymStore>()(
  persist(
    (set) => ({
      rutinas: [],
      entrenamientos: [],
      objetivos: [],

      addRutina: (rutina) =>
        set((state) => ({
          rutinas: [...state.rutinas, rutina],
        })),

      deleteRutina: (id) =>
        set((state) => ({
          rutinas: state.rutinas.filter((rutina) => rutina.id !== id),
        })),

      archiveRutina: (id) =>
        set((state) => ({
          rutinas: state.rutinas.map((rutina) =>
            rutina.id === id
              ? { ...rutina, archived: true }
              : rutina
          ),
        })),

      addEntrenamiento: (entrenamiento) =>
        set((state) => ({
          entrenamientos: [...state.entrenamientos, entrenamiento],
        })),

      deleteEntrenamiento: (id) =>
        set((state) => ({
          entrenamientos: state.entrenamientos.filter(
            (entrenamiento) => entrenamiento.id !== id
          ),
        })),

      archiveEntrenamiento: (id) =>
        set((state) => ({
          entrenamientos: state.entrenamientos.map((entrenamiento) =>
            entrenamiento.id === id
              ? { ...entrenamiento, archived: true }
              : entrenamiento
          ),
        })),

      addObjetivo: (objetivo) =>
        set((state) => ({
          objetivos: [...state.objetivos, objetivo],
        })),

      deleteObjetivo: (id) =>
        set((state) => ({
          objetivos: state.objetivos.filter(
            (objetivo) => objetivo.id !== id
          ),
        })),

      archiveObjetivo: (id) =>
        set((state) => ({
          objetivos: state.objetivos.map((objetivo) =>
            objetivo.id === id
              ? { ...objetivo, archived: true }
              : objetivo
          ),
        })),

      toggleObjetivo: (id) =>
        set((state) => ({
          objetivos: state.objetivos.map((objetivo) =>
            objetivo.id === id
              ? { ...objetivo, completed: !objetivo.completed }
              : objetivo
          ),
        })),
    }),
    {
      name: 'gymflow-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);