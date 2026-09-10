import { ScrollView, StyleSheet, Text } from 'react-native';
import Tarjeta from '../../components/Tarjeta';

const actividades = ['Escuchar música', 'Salir a caminar', 'Preparar unos mates', 'Ver una película'];

export default function Tarjetas() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.indicacion}>Tocá una tarjeta para cambiar sus colores.</Text>
      {actividades.map((actividad) => (
        <Tarjeta key={actividad} texto={actividad} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#faf5ed' },
  contenido: { padding: 24 },
  indicacion: { fontSize: 17, color: '#655e58', marginBottom: 24, textAlign: 'center' },
});
