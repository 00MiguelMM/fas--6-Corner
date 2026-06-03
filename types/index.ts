export interface BaseItem {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Rutina extends BaseItem {
  exercises: string[];
}

export interface Entrenamiento extends BaseItem {
  duration: number;
  notes: string;
}

export interface Objetivo extends BaseItem {
  target: string;
  completed: boolean;
}

export type AnyItem = Rutina | Entrenamiento | Objetivo;