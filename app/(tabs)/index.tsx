import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Cada toque suma</Text>
      <Text style={styles.valor}>{contador}</Text>
      <Pressable
        accessibilityRole="button"
        style={styles.boton}
        onPress={() => setContador((anterior) => anterior + 1)}
      >
        <Text style={styles.textoBoton}>Incrementar contador</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#faf5ed',
  },
  titulo: { fontSize: 24, color: '#382d26', textAlign: 'center' },
  valor: { fontSize: 72, fontWeight: 'bold', color: '#8b3e23', marginVertical: 24 },
  boton: { backgroundColor: '#8b3e23', padding: 16, borderRadius: 12 },
  textoBoton: { color: '#fffaf3', fontSize: 18, textAlign: 'center' },
});
