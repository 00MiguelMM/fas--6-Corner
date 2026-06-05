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

### Type Guards

GymFlow utiliza type guards para distinguir distintos tipos de datos en tiempo de ejecución.

Por ejemplo:

```ts
if ('exercises' in item)
```

Esto permite comprobar si un elemento es una `Rutina`, ya que solo ese tipo contiene la propiedad `exercises`.

Los type guards ayudan a TypeScript a identificar correctamente el tipo de objeto con el que se está trabajando y permiten escribir código más seguro y organizado.

---

## Gestión de estado

En React Native existen varias formas de gestionar el estado de una aplicación.

### useState

`useState` se utiliza para manejar estado local dentro de un componente concreto.

Es útil para datos sencillos, como:
- el valor de un input,
- si un modal está abierto,
- o un pequeño contador.

Sin embargo, no es la mejor opción para compartir datos entre muchas pantallas.

### Context API

Context API permite compartir datos entre componentes sin tener que pasarlos manualmente mediante props.

Puede ser útil para información global como:
- tema visual,
- usuario actual,
- idioma,
- configuración general.

El problema es que, si se usa para muchos datos dinámicos, puede provocar renders innecesarios y hacer que el código sea más difícil de mantener.

### Zustand

Zustand es una librería ligera para gestionar estado global en React y React Native.

En GymFlow se utiliza Zustand para guardar y modificar los datos principales de la aplicación:
- rutinas,
- entrenamientos,
- objetivos.

A diferencia de Context API, Zustand no necesita envolver toda la aplicación con providers anidados y permite acceder al estado desde cualquier pantalla de forma sencilla.

También facilita crear acciones como:
- añadir una rutina,
- eliminar un entrenamiento,
- completar un objetivo.

Por estos motivos, Zustand es una buena opción para GymFlow, ya que mantiene el estado global organizado y evita complicar la arquitectura del proyecto.

## Rendimiento en listas

Las aplicaciones móviles suelen mostrar grandes cantidades de información mediante listas. Cuando una lista contiene muchos elementos, renderizar todos los componentes a la vez puede provocar problemas de rendimiento y consumo de memoria.

React Native incluye FlatList para optimizar este proceso, pero en listas muy grandes puede aparecer contenido en blanco durante desplazamientos rápidos.

Para solucionar este problema, GymFlow utiliza FlashList, una librería desarrollada por Shopify que mejora el reciclaje de componentes.

El reciclaje de componentes consiste en reutilizar elementos visuales que ya existen en memoria en lugar de crear nuevos continuamente durante el scroll.

Además, FlashList utiliza la propiedad `estimatedItemSize`, que permite estimar el tamaño de los elementos antes de renderizarlos. Cuanto más precisa sea esta estimación, mejor será el rendimiento de la lista.

Gracias a estas optimizaciones, FlashList ofrece una experiencia más fluida y eficiente que FlatList cuando se trabaja con grandes cantidades de datos.

---

## Validación con Zod

GymFlow utiliza Zod para validar los datos introducidos por el usuario en los formularios.

Zod permite definir schemas de validación, es decir, reglas que deben cumplir los datos antes de guardarse en la aplicación.

En el formulario de `nuevo-elemento.tsx` se validan distintos tipos de contenido:
- rutinas,
- entrenamientos,
- objetivos.

Por ejemplo, una rutina debe tener:
- un título de al menos 3 caracteres,
- y al menos un ejercicio.

Si los datos no cumplen las reglas, Zod devuelve errores que se muestran debajo de cada campo del formulario.

Además, se utiliza `KeyboardAvoidingView` para evitar que el teclado tape los inputs en dispositivos móviles.

Gracias a Zod, la aplicación evita guardar datos incompletos o incorrectos y mejora la experiencia del usuario.

---

---

## Persistencia con AsyncStorage

GymFlow utiliza AsyncStorage para guardar los datos localmente en el dispositivo.

AsyncStorage permite almacenar información sencilla como rutinas, entrenamientos y objetivos, incluso aunque el usuario cierre la aplicación o recargue la página.

En este proyecto se ha integrado AsyncStorage con Zustand mediante el middleware `persist`.

Esto permite que el store global se guarde automáticamente bajo la clave:

```ts
gymflow-storage
```

### Rehidratación del store

Cuando la aplicación vuelve a abrirse, Zustand recupera automáticamente los datos almacenados. Este proceso se denomina rehidratación del store.

La rehidratación consiste en reconstruir el estado global de la aplicación a partir de la información guardada previamente en AsyncStorage.

Durante este proceso, en una aplicación real se podría mostrar un indicador de carga para evitar que el usuario vea pantallas vacías mientras los datos terminan de recuperarse.

### Limitaciones de AsyncStorage

Entre las principales limitaciones de AsyncStorage se encuentran:

- No cifra los datos almacenados.
- Tiene un límite de tamaño.
- Los datos solo están disponibles en el dispositivo donde fueron guardados.

### Ventajas para GymFlow

A pesar de estas limitaciones, AsyncStorage es una solución adecuada para GymFlow porque permite mantener la información del usuario entre sesiones sin necesidad de un servidor o una base de datos externa.