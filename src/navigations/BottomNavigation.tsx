import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;