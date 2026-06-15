export type ApiNote = {
  id: string;
  title: string;
  content: string | null;
  type: 'note' | 'checklist' | 'idea';
  color: string | null;
  created_at: string;
  updated_at: string;
};

export type CreateNoteInput = {
  title: string;
  type: 'note' | 'checklist' | 'idea';
  content?: string;
  color?: string;
};

const BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000/api';

export async function getNotes(): Promise<ApiNote[]> {
  const res = await fetch(`${BASE_URL}/notes`);

  if (!res.ok) {
    throw new Error('Error al cargar notas');
  }

  return res.json();
}

export async function createNote(data: CreateNoteInput): Promise<ApiNote> {
  const res = await fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Error al crear nota');
  }

  return res.json();
}