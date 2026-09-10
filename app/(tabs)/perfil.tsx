import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Perfil() {
  const [nombre, setNombre] = useState('Felipe Flachsland');
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const puedeGuardar = nuevoNombre.trim().length > 0;

  const abrirModal = () => {
    setNuevoNombre(nombre);
    setModalVisible(true);
  };

  const guardarNombre = () => {
    if (!puedeGuardar) return;
    setNombre(nuevoNombre.trim());
    setModalVisible(false);
  };

  return (
    <View style={styles.pantalla}>
      <Text style={styles.etiqueta}>Nombre y apellido</Text>
      <Text style={styles.nombre}>{nombre}</Text>
      <Pressable accessibilityRole="button" style={styles.boton} onPress={abrirModal}>
        <Text style={styles.textoBoton}>Cambiar nombre</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.fondoModal}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formulario}>
            <Text style={styles.tituloModal}>Cambiar nombre</Text>
            {/* El borrador evita cambiar el perfil antes de guardar. */}
            <TextInput
              accessibilityLabel="Nombre y apellido"
              style={styles.input}
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
              placeholder="Nombre y apellido"
              autoCapitalize="words"
            />
            {!puedeGuardar && <Text style={styles.aviso}>Ingresá un nombre para guardar.</Text>}
            <Pressable
              accessibilityRole="button"
              style={[styles.boton, !puedeGuardar && styles.deshabilitado]}
              disabled={!puedeGuardar}
              onPress={guardarNombre}
            >
              <Text style={styles.textoBoton}>Guardar</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              style={styles.cancelar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoCancelar}>Cancelar</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    padding: 24, backgroundColor: '#faf5ed',
  },
  etiqueta: { fontSize: 17, color: '#655e58' },
  nombre: { fontSize: 28, fontWeight: 'bold', color: '#382d26', marginVertical: 24, textAlign: 'center' },
  boton: { backgroundColor: '#8b3e23', padding: 16, borderRadius: 12, alignItems: 'center' },
  textoBoton: { color: '#fffaf3', fontSize: 18, textAlign: 'center' },
  fondoModal: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: 'rgba(40,30,20,0.55)' },
  formulario: { backgroundColor: '#faf5ed', borderRadius: 16, padding: 24 },
  tituloModal: { fontSize: 23, color: '#382d26', fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#8d7967', borderRadius: 8, backgroundColor: '#ffffff', color: '#382d26', fontSize: 18, padding: 14, marginBottom: 16 },
  aviso: { color: '#8b3e23', marginBottom: 16 },
  deshabilitado: { opacity: 0.45 },
  cancelar: { padding: 14, marginTop: 8, alignItems: 'center' },
  textoCancelar: { fontSize: 16, color: '#655e58' },
});
