import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

type Props = {}

const Navigation = (props: Props) => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default Navigation;