import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type TarjetaProps = {
  texto: string;
};

export default function Tarjeta({ texto }: TarjetaProps) {
  // Cada tarjeta conserva su propio estado, independiente de las demás.
  const [seleccionada, setSeleccionada] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: seleccionada }}
      onPress={() => setSeleccionada((anterior) => !anterior)}
      style={[styles.tarjeta, seleccionada && styles.tarjetaSeleccionada]}
    >
      <Text style={[styles.texto, seleccionada && styles.textoSeleccionado]}>
        {texto}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    minHeight: 110,
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#eee0cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjetaSeleccionada: { backgroundColor: '#8b3e23' },
  texto: { fontSize: 20, color: '#382d26', textAlign: 'center' },
  textoSeleccionado: { color: '#fffaf3' },
});
