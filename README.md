# TP 1 — Felipe Flachsland

Programación de Aplicaciones Móviles. React Native, TypeScript y Expo Router.

La app reúne la consigna de tarjetas y la de navegación en tres pestañas.

## Ejecutar

Necesitás Node.js y npm instalados. Desde esta carpeta:

```sh
npm install
npm start
```

Abrí el QR con una versión de Expo Go compatible con SDK 57. El teléfono y la computadora deben estar en la misma red. También podés ejecutar `npm run web` para abrir la versión de navegador.

Para revisar TypeScript: `npm run check`.

## Archivos y funcionamiento

| Archivo | Responsabilidad |
| --- | --- |
| `app/_layout.tsx` | Define el Stack principal y oculta su encabezado para no duplicar el de las pestañas. |
| `app/(tabs)/_layout.tsx` | Define las pestañas Contador, Tarjetas y Perfil. |
| `app/(tabs)/index.tsx` | Guarda el contador con `useState` e incrementa su valor al tocar el botón. |
| `app/(tabs)/tarjetas.tsx` | Recorre una lista con `map` y pasa el texto a cada tarjeta mediante props. |
| `components/Tarjeta.tsx` | Recibe `texto`, guarda si está seleccionada y cambia el fondo y el color del texto. |
| `app/(tabs)/perfil.tsx` | Muestra el nombre y permite editarlo mediante un `TextInput` dentro de un `Modal`. |

Cada tarjeta tiene su propio estado. Tocarla otra vez devuelve sus colores originales. `justifyContent: 'center'` y `alignItems: 'center'` centran el contenido en ambos ejes; `textAlign: 'center'` centra las líneas del texto.

El perfil comienza con **Felipe Flachsland**. Tiene tres estados: el nombre guardado, el borrador del input y la visibilidad del modal. Al abrirlo se copia el nombre al borrador. Guardar actualiza el perfil y cierra el modal; Cancelar lo cierra sin aplicar cambios. No se permite guardar un nombre vacío o compuesto únicamente por espacios.

Los estados se mantienen al cambiar de pestaña, pero se reinician al recargar o cerrar la app. No se usa almacenamiento persistente porque las consignas no lo piden.

## Cómo explicarlo al profesor

“Separé la tarjeta porque se repite y recibe su texto por props. Cada tarjeta usa `useState` para recordar si está seleccionada. Al presionarla cambia el estado y React vuelve a mostrarla con los estilos correspondientes. El contador también usa un estado. En el perfil mantengo un borrador para que escribir no cambie el nombre hasta tocar Guardar. Expo Router organiza las pantallas a partir de los archivos y los dos layouts configuran el Stack y las pestañas.”

## Conceptos utilizados

Componentes funcionales, props con un tipo sencillo de TypeScript, `useState`, `map`, funciones, estilos condicionales, `Pressable`, `Text`, `View`, `ScrollView`, `TextInput`, `Modal`, `KeyboardAvoidingView`, `Platform`, `StyleSheet`, Flexbox, `Tabs`, `Stack` y `_layout`.

Los ejemplos de clase contienen los patrones de estado, inputs, modal y estilos utilizados. Expo Router está exigido por la consigna. La configuración técnica sigue su [guía oficial de instalación](https://docs.expo.dev/router/installation/). No se agregaron bibliotecas para formularios, estilos ni manejo de estado.

## Material consultado

- `Javascript_ECMAScript_y_React_Completo.pptx`: componentes, props, estado y listas.
- `Clase 3 - Styles y Layout.pdf` y `Estilos.pdf`: StyleSheet y centrado con Flexbox.
- `Codigos-Estilo-20260905.zip`: ejemplo de lista de tarjetas.
- `Perfil Editable.tsx`: input controlado y validación del nombre.
- `Clase 3 - Ejercicio - Formulario Modal.tsx`: modal y botones de confirmación/cancelación.
- `Styles por Seccion.tsx`: manejo del teclado en un modal.
- `Clase 4 - Navigators.pdf`: conceptos de Stack y pestañas. Su API de React Navigation es anterior; aquí se usa Expo Router según la consigna.
- `TP1 KRENZ.zip`: referencia de organización y dependencias; no se extrajo su código a este proyecto.

Los ejercicios adicionales del material se usaron como referencia: sus consignas y TODOs no son requisitos de este TP.

## Comprobación manual

1. En Contador, comprobar que empieza en 0 y aumenta en uno con cada toque.
2. En Tarjetas, tocar una tarjeta: cambian su fondo y texto, sin modificar las demás. Tocarla de nuevo para revertirlos.
3. En Perfil, abrir Cambiar nombre, escribir y guardar: el modal se cierra y aparece el nuevo nombre.
4. Volver a abrir: debe aparecer el último nombre guardado. Probar Cancelar y un nombre vacío.
5. Cambiar de pestaña y regresar: los valores deben mantenerse.
6. En el teléfono, comprobar que el teclado permite editar y guardar; el botón Atrás de Android también cierra el modal.

## Entrega

GitHub queda pendiente para una etapa posterior, según lo acordado. `.gitignore` excluye `node_modules`, las exportaciones y los archivos temporales. `package-lock.json` sí se incluye para reproducir la instalación.
