import { create } from 'zustand';

import type { Entrenamiento, Objetivo, Rutina } from '../types';

interface GymStore {
  rutinas: Rutina[];
  entrenamientos: Entrenamiento[];
  objetivos: Objetivo[];

  addRutina: (rutina: Rutina) => void;
  deleteRutina: (id: string) => void;

  addEntrenamiento: (entrenamiento: Entrenamiento) => void;
  deleteEntrenamiento: (id: string) => void;

  addObjetivo: (objetivo: Objetivo) => void;
  deleteObjetivo: (id: string) => void;
  toggleObjetivo: (id: string) => void;
}

export const useGymStore = create<GymStore>((set) => ({
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

  addObjetivo: (objetivo) =>
    set((state) => ({
      objetivos: [...state.objetivos, objetivo],
    })),

  deleteObjetivo: (id) =>
    set((state) => ({
      objetivos: state.objetivos.filter((objetivo) => objetivo.id !== id),
    })),

  toggleObjetivo: (id) =>
    set((state) => ({
      objetivos: state.objetivos.map((objetivo) =>
        objetivo.id === id
          ? { ...objetivo, completed: !objetivo.completed }
          : objetivo
      ),
    })),
}));