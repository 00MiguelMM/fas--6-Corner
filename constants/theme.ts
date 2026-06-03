// Tema claro: paleta de colores, espaciados y tipografía para modo light
export const lightTheme = {
  colors: {
    // Color de fondo general de las pantallas
    background: '#f5f7fb',
    // Color de tarjetas y superficies elevadas
    surface: '#ffffff',
    // Color principal de acento (botones, enlaces activos)
    primary: '#2563eb',
    // Color del texto principal
    text: '#0f172a',
    // Color del texto secundario o descriptivo
    secondaryText: '#64748b',
    // Color de bordes y separadores
    border: '#e2e8f0',
  },

  spacing: {
    // Espaciado extra pequeño (4 px)
    xs: 4,
    // Espaciado pequeño (8 px)
    sm: 8,
    // Espaciado medio (16 px)
    md: 16,
    // Espaciado grande (24 px)
    lg: 24,
    // Espaciado extra grande (32 px)
    xl: 32,
  },

  typography: {
    // Tamaño de fuente para títulos principales
    title: 28,
    // Tamaño de fuente para subtítulos
    subtitle: 20,
    // Tamaño de fuente para texto de cuerpo
    body: 16,
    // Tamaño de fuente para texto pequeño o metadatos
    small: 14,
  },
};

// Tema oscuro: misma estructura que lightTheme con colores adaptados
export const darkTheme = {
  colors: {
    // Fondo oscuro de las pantallas
    background: '#0f172a',
    // Superficies elevadas en tono slate oscuro
    surface: '#1e293b',
    // Azul más claro para mejor contraste sobre fondo oscuro
    primary: '#3b82f6',
    // Texto claro sobre fondos oscuros
    text: '#f8fafc',
    // Texto secundario atenuado
    secondaryText: '#94a3b8',
    // Bordes sutiles en modo oscuro
    border: '#334155',
  },

  spacing: {
    // Espaciado extra pequeño (4 px)
    xs: 4,
    // Espaciado pequeño (8 px)
    sm: 8,
    // Espaciado medio (16 px)
    md: 16,
    // Espaciado grande (24 px)
    lg: 24,
    // Espaciado extra grande (32 px)
    xl: 32,
  },

  typography: {
    // Tamaño de fuente para títulos principales
    title: 28,
    // Tamaño de fuente para subtítulos
    subtitle: 20,
    // Tamaño de fuente para texto de cuerpo
    body: 16,
    // Tamaño de fuente para texto pequeño o metadatos
    small: 14,
  },
};
