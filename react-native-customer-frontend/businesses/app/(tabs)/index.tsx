import { Image, StyleSheet, Platform } from 'react-native';
import { BusinessPage } from '../BusinessPage';
import HomePage from '../HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppointmentPage } from '../AppointmentPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomePage } />
        <Stack.Screen
          name="Business"
          component={ BusinessPage } />
        <Stack.Screen
          name="Appointment"
          component={ AppointmentPage } />
      </Stack.Navigator>
  );
}

export default App;
