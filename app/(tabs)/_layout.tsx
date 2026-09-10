import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function LayoutTabs() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#8b3e23',
      tabBarInactiveTintColor: '#655e58',
      tabBarIconStyle: styles.icono,
      tabBarLabelStyle: styles.etiqueta,
      headerTitleAlign: 'center',
    }}>
      <Tabs.Screen name="index" options={{ title: 'Contador' }} />
      <Tabs.Screen name="tarjetas" options={{ title: 'Tarjetas' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icono: { display: 'none' },
  etiqueta: { fontSize: 14, marginVertical: 12 },
});
