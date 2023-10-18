import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}} initialRouteName='LoginScreen'>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;