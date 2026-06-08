// Exporta una interfaz reutilizable con los campos comunes a todos los ítems de la app
export interface BaseItem {
  // Identificador único del ítem (por ejemplo, un UUID)
  id: string;
  // Nombre o título visible del ítem
  title: string;
  // Fecha y hora en que se creó el registro
  createdAt: Date;
  // Fecha y hora de la última modificación
  updatedAt: Date;
}

// Interfaz para una rutina de ejercicios; hereda los campos de BaseItem
export interface Rutina extends BaseItem {
  // Lista de nombres o identificadores de los ejercicios incluidos en la rutina
  exercises: string[];
}

// Interfaz para una sesión de entrenamiento registrada; hereda los campos de BaseItem
export interface Entrenamiento extends BaseItem {
  // Duración del entrenamiento en la unidad que uses en la app (p. ej. minutos)
  duration: number;
  // Texto libre con observaciones o notas sobre la sesión
  notes: string;
}

// Interfaz para un objetivo o meta del usuario; hereda los campos de BaseItem
export interface Objetivo extends BaseItem {
  // Descripción de la meta a alcanzar
  target: string;
  // Indica si el objetivo ya se cumplió
  completed: boolean;
}

// Unión de tipos: un ítem puede ser cualquiera de las tres variantes anteriores
export type AnyItem = Rutina | Entrenamiento | Objetivo;

export interface Rutina extends BaseItem {
  exercises: string[];
  archived?: boolean;
}

export interface Entrenamiento extends BaseItem {
  duration: number;
  notes: string;
  archived?: boolean;
}

export interface Objetivo extends BaseItem {
  target: string;
  completed: boolean;
  archived?: boolean;
}