import { Button } from "@rneui/base"

type Props = {
    navigation: any
}

const OnboardingScreen = (props: Props) => {
  return (
    <Button onPress={() => props.navigation.navigate("BottomTabNavigation")}>Click Me</Button>
  )
}

export default OnboardingScreen