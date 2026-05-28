# Configuración de herramientas de IA

Durante el desarrollo de GymFlow voy a utilizar herramientas de inteligencia artificial como apoyo, principalmente Cursor y ChatGPT.

## Cursor

Cursor se utilizará como editor principal para escribir y revisar código dentro del proyecto.

Para configurarlo he creado un archivo `.cursorrules` en la raíz del proyecto. En este archivo he definido el contexto principal de GymFlow, las tecnologías usadas, la estructura de carpetas, el estilo de código y algunas restricciones importantes.

El objetivo de esta configuración es que Cursor entienda desde el principio que el proyecto es una aplicación móvil con React Native, Expo y TypeScript, y que no genere código propio de aplicaciones web tradicionales.

La configuración incluye indicaciones como:

- Usar TypeScript en todo el proyecto.
- Trabajar con componentes funcionales.
- Separar pantallas, componentes, estado, tipos y constantes.
- Usar Expo Router para la navegación.
- Usar Zustand para el estado global.
- Usar AsyncStorage para la persistencia local.
- Usar FlashList para las listas principales.
- Evitar HTML, CSS web, React DOM o localStorage.

Esta configuración ayuda a reducir errores y a mantener una arquitectura coherente durante el desarrollo.

## ChatGPT

ChatGPT se utilizará como herramienta de apoyo para entender conceptos, planificar tareas, redactar documentación y revisar fragmentos de código.

En este caso no se configura dentro del repositorio como Cursor, pero sí se le proporciona el contexto técnico del proyecto en cada conversación importante.

El contexto usado será:

- Nombre del proyecto: GymFlow.
- Tipo de aplicación: app móvil de productividad fitness.
- Stack: React Native, Expo, TypeScript, Expo Router, Zustand, AsyncStorage, FlashList y Zod.
- Arquitectura basada en carpetas separadas para rutas, componentes, estado, tipos, constantes y documentación.
- Objetivo: construir una app sencilla, clara y funcional para organizar rutinas, entrenamientos y objetivos de gimnasio.

## Motivo de la configuración

Configurar las herramientas de IA antes de empezar a programar permite obtener respuestas más útiles y coherentes.

De esta forma, la IA conoce las decisiones principales del proyecto y es menos probable que proponga soluciones que no encajen con la arquitectura, como usar código web en una app móvil o añadir librerías innecesarias.

La IA se usará como ayuda durante el desarrollo, pero el código generado será revisado manualmente antes de incorporarlo al proyecto.