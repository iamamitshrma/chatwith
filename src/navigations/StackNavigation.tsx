import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import BottomTabNavigation from './BottomNavigation';
import AuthNavigation from './AuthNavigation';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}

export default StackNavigation;