import { create } from 'zustand';

import { createNote, getNotes } from '../lib/api';
import type { Entrenamiento, Objetivo, Rutina } from '../types';

interface GymStore {
  rutinas: Rutina[];
  entrenamientos: Entrenamiento[];
  objetivos: Objetivo[];

  isLoading: boolean;
  error: string | null;

  fetchNotes: () => Promise<void>;

  addRutina: (rutina: Rutina) => Promise<void>;
  deleteRutina: (id: string) => void;
  archiveRutina: (id: string) => void;

  addEntrenamiento: (entrenamiento: Entrenamiento) => Promise<void>;
  deleteEntrenamiento: (id: string) => void;
  archiveEntrenamiento: (id: string) => void;

  addObjetivo: (objetivo: Objetivo) => Promise<void>;
  deleteObjetivo: (id: string) => void;
  archiveObjetivo: (id: string) => void;

  toggleObjetivo: (id: string) => void;
}

export const useGymStore = create<GymStore>()((set) => ({
  rutinas: [],
  entrenamientos: [],
  objetivos: [],

  isLoading: false,
  error: null,

  fetchNotes: async () => {
    try {
      set({ isLoading: true, error: null });

      const notes = await getNotes();

      set({
        rutinas: notes
          .filter((note) => note.type === 'note')
          .map((note) => ({
            id: note.id,
            title: note.title,
            createdAt: new Date(note.created_at),
            updatedAt: new Date(note.updated_at),
            exercises: note.content ? [note.content] : [],
            archived: false,
          })) as Rutina[],

        entrenamientos: notes
          .filter((note) => note.type === 'checklist')
          .map((note) => ({
            id: note.id,
            title: note.title,
            createdAt: new Date(note.created_at),
            updatedAt: new Date(note.updated_at),
            duration: 0,
            notes: note.content ?? '',
            archived: false,
          })) as Entrenamiento[],

        objetivos: notes
          .filter((note) => note.type === 'idea')
          .map((note) => ({
            id: note.id,
            title: note.title,
            createdAt: new Date(note.created_at),
            updatedAt: new Date(note.updated_at),
            target: note.content ?? '',
            completed: false,
            archived: false,
          })) as Objetivo[],

        isLoading: false,
      });
    } catch {
      set({
        error: 'Error al cargar los datos',
        isLoading: false,
      });
    }
  },

  addRutina: async (rutina) => {
    try {
      const note = await createNote({
        title: rutina.title,
        type: 'note',
        content: rutina.exercises.join(', '),
      });

      set((state) => ({
        rutinas: [
          ...state.rutinas,
          {
            ...rutina,
            id: note.id,
          },
        ],
      }));
    } catch {
      set({ error: 'Error al crear la rutina' });
    }
  },

  deleteRutina: (id) =>
    set((state) => ({
      rutinas: state.rutinas.filter((rutina) => rutina.id !== id),
    })),

  archiveRutina: (id) =>
    set((state) => ({
      rutinas: state.rutinas.map((rutina) =>
        rutina.id === id ? { ...rutina, archived: true } : rutina
      ),
    })),

  addEntrenamiento: async (entrenamiento) => {
    try {
      const note = await createNote({
        title: entrenamiento.title,
        type: 'checklist',
        content: entrenamiento.notes,
      });

      set((state) => ({
        entrenamientos: [
          ...state.entrenamientos,
          {
            ...entrenamiento,
            id: note.id,
          },
        ],
      }));
    } catch {
      set({ error: 'Error al crear el entrenamiento' });
    }
  },

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

  addObjetivo: async (objetivo) => {
    try {
      const note = await createNote({
        title: objetivo.title,
        type: 'idea',
        content: objetivo.target,
      });

      set((state) => ({
        objetivos: [
          ...state.objetivos,
          {
            ...objetivo,
            id: note.id,
          },
        ],
      }));
    } catch {
      set({ error: 'Error al crear el objetivo' });
    }
  },

  deleteObjetivo: (id) =>
    set((state) => ({
      objetivos: state.objetivos.filter((objetivo) => objetivo.id !== id),
    })),

  archiveObjetivo: (id) =>
    set((state) => ({
      objetivos: state.objetivos.map((objetivo) =>
        objetivo.id === id ? { ...objetivo, archived: true } : objetivo
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
}));