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