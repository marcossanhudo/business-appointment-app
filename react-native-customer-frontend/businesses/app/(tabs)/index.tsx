import { Image, StyleSheet, Platform } from 'react-native';
import { BusinessPage } from '../BusinessPage';
import HomePage from '../HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppointmentTimePage } from '../AppointmentTimePage';
import { AppointmentAttendantPage } from '../AppointmentAttendantPage';

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
          name="Appointment Time"
          component={ AppointmentTimePage }
          options={{ title: "New appointment" }} />
        <Stack.Screen
          name="Appointment Attendant"
          component={ AppointmentAttendantPage }
          options={{ title: "New appointment" }} />
      </Stack.Navigator>
  );
}

export default App;
