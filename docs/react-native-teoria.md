# React Native: teoría básica

## React Native vs aplicación nativa

React Native es un framework desarrollado por Meta que permite crear aplicaciones móviles usando JavaScript y React.

Una aplicación nativa se desarrolla utilizando el lenguaje oficial de cada sistema operativo:
- Kotlin o Java para Android
- Swift u Objective-C para iOS

### Diferencias principales

| React Native | App nativa |
|---|---|
| Usa JavaScript y React | Usa lenguajes oficiales |
| Permite reutilizar código entre Android e iOS | Se desarrolla por separado |
| Desarrollo más rápido | Mayor rendimiento |
| Más fácil para equipos web | Mayor acceso al hardware |

### Ventajas de React Native

- Permite desarrollar para Android e iOS con un único código
- Desarrollo más rápido
- Gran comunidad y librerías disponibles
- Ideal para prototipos y proyectos multiplataforma

### Desventajas de React Native

- Menor rendimiento que una app totalmente nativa
- Algunas funcionalidades avanzadas requieren código nativo
- Dependencia de librerías externas
- Puede generar problemas de compatibilidad entre plataformas

---

## Metro Bundler

Metro Bundler es el sistema encargado de empaquetar y servir el código de React Native.

Cuando ejecutamos:

```bash
npx expo start
```

Metro analiza todos los archivos del proyecto, genera el bundle de JavaScript y envía los cambios a la aplicación en tiempo real.

### Funciones principales de Metro

- Empaquetar el código JavaScript
- Detectar cambios automáticamente
- Actualizar la app sin recompilar completamente
- Gestionar dependencias y recursos

Gracias a Metro, el desarrollo es más rápido y se pueden ver cambios instantáneos usando Hot Reload o Fast Refresh.

---

## Expo Go y sus limitaciones

Expo Go es una aplicación que permite ejecutar proyectos React Native directamente en el móvil mediante un código QR.

### Qué permite Expo Go

- Probar aplicaciones rápidamente
- Ver cambios en tiempo real
- Facilitar el desarrollo inicial
- Evitar configuraciones complejas

### Limitaciones de Expo Go

Expo Go no incluye todas las APIs nativas disponibles en Android e iOS.

Por ejemplo:
- Algunas librerías nativas no funcionan
- No permite añadir módulos personalizados
- Tiene limitaciones para notificaciones avanzadas, Bluetooth, NFC o integraciones específicas

### Proyectos reales

En proyectos profesionales normalmente se utilizan:
- Development Builds
- Android Studio
- Xcode
- Compilaciones nativas

Esto permite tener control total sobre las funcionalidades del dispositivo y utilizar cualquier librería nativa necesaria.

---

## Sistemas de diseño

Para el sistema de diseño de GymFlow he comparado dos librerías habituales en proyectos Expo: Gluestack UI y React Native Paper.

Gluestack UI es una librería muy personalizable, con una filosofía similar a Tailwind CSS. Permite crear interfaces con identidad visual propia y trabajar con componentes modernos, pero requiere más configuración inicial.

React Native Paper está basada en Material Design y ofrece componentes ya preparados para aplicaciones móviles. Es más sencilla de configurar, tiene buena integración con React Native y permite avanzar más rápido en una primera versión del proyecto.

Para GymFlow he elegido React Native Paper porque la aplicación necesita una interfaz clara, consistente y funcional. Al tratarse de una primera versión, priorizo una librería estable, sencilla de usar y con componentes listos para pantallas, tarjetas, botones y formularios.

Esta elección permite centrar el desarrollo en la navegación, el estado global y la persistencia local sin dedicar demasiado tiempo a configurar una librería visual más compleja.

---

## Tema visual y modo oscuro

GymFlow utiliza un sistema de tema personalizado definido en `constants/theme.ts`.

En este archivo se han configurado:
- colores principales,
- colores de fondo,
- tipografía,
- espaciados,
- y estilos para modo claro y oscuro.

El cambio entre tema claro y oscuro se realiza utilizando `useColorScheme` de React Native, que detecta automáticamente la configuración del dispositivo del usuario.

Gracias a esto, la aplicación puede adaptar su apariencia según el tema activo del sistema operativo.

---

## Navegación con Expo Router

GymFlow utiliza Expo Router para gestionar la navegación de la aplicación.

Expo Router funciona mediante el sistema de archivos. Cada archivo dentro de la carpeta `app/` representa una pantalla o ruta distinta dentro de la aplicación.

### Navegación por pestañas (Tabs)

La navegación principal de GymFlow utiliza Tabs, es decir, una barra inferior con distintas secciones principales.

Las pestañas implementadas son:
- Rutinas
- Entrenamientos
- Objetivos

Cada pestaña tiene su propia pantalla y un icono asociado mediante `@expo/vector-icons`.

La configuración de las Tabs se encuentra en:

```text
app/(tabs)/_layout.tsx
```

Este tipo de navegación es útil porque permite acceder rápidamente a las secciones principales de la aplicación desde cualquier pantalla.

---

### Navegación por pila (Stack)

GymFlow también utiliza navegación tipo Stack mediante `app/_layout.tsx`.

La navegación Stack funciona como una pila de pantallas:
- una pantalla se coloca encima de otra,
- el usuario puede avanzar y volver atrás,
- y cada pantalla mantiene su historial de navegación.

Este sistema se utiliza para:
- pantallas de detalle,
- rutas dinámicas,
- y navegación interna.

Por ejemplo:

```text
rutinas/[id].tsx
```

permite abrir el detalle individual de una rutina concreta.

---

### Modales

Además de Tabs y Stack, GymFlow incluye una pantalla modal para crear nuevo contenido:

```text
app/nuevo-elemento.tsx
```

Los modales se utilizan para mostrar contenido temporal encima de la pantalla actual sin abandonar completamente el contexto de navegación.

En este proyecto, el modal se utilizará para:
- crear rutinas,
- añadir entrenamientos,
- o registrar objetivos nuevos.

---

### Justificación de la arquitectura

GymFlow combina Tabs, Stack y modales porque cada sistema resuelve una necesidad diferente:

- Tabs: acceso rápido a las secciones principales.
- Stack: navegación entre pantallas relacionadas.
- Modales: acciones rápidas sin cambiar completamente de contexto.

Esta combinación es habitual en aplicaciones móviles reales y permite mantener una navegación clara y organizada.

---

## Modelado de datos con TypeScript

GymFlow utiliza interfaces de TypeScript para definir la estructura de los datos de la aplicación.

Se ha creado una interfaz base llamada `BaseItem` que contiene las propiedades comunes:
- id
- title
- createdAt
- updatedAt

A partir de esta interfaz se crean:
- `Rutina`
- `Entrenamiento`
- `Objetivo`

Cada tipo añade propiedades específicas según su función dentro de la aplicación.

También se utiliza un tipo unión:

```ts
type AnyItem = Rutina | Entrenamiento | Objetivo;
```

Esto permite crear funciones capaces de trabajar con cualquier tipo de elemento de GymFlow.

Gracias a TypeScript, la aplicación tiene:
- mejor organización de datos,
- autocompletado,
- detección temprana de errores,
- y código más mantenible.