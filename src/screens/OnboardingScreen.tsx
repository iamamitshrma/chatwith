import { Text } from "@rneui/base"
import ScreenContainer from "../ui/ScreenContainer"
import ScrollViewContainer from "../ui/ScrollViewContainer"
import Status from "../ui/StatusBar"
import { Dimensions } from "react-native"
import { StyleSheet } from "react-native"
import ButtonItem from "../ui/ButtonItem"
import { useNavigation } from "@react-navigation/native"

type Props = {
    navigation: any
}

const OnboardingScreen = (props: Props) => {
  const { width } = Dimensions.get('screen');
  const navigation = useNavigation<any>();

  return (
    <ScreenContainer>
      <Status bgColor="#7f6feb" />
      <ScrollViewContainer>
        {[...new Array(3)].map((item, index) => {
          return (
            <Text key={index} style={{width: width}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id. Veritatis unde, modi temporibus sunt, assumenda suscipit excepturi dolorum dolore facilis nostrum, quo dicta? Ex dolor fugit consectetur rerum commodi!</Text>
          )
        })}
      </ScrollViewContainer>
      <ButtonItem handlePress={() => navigation.navigate("AuthNavigation")}>Continue</ButtonItem>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  activeIndicator: {
    height: '100%',
    width: '100%',
    backgroundColor: "green",
    borderRadius: 10,
  },
})

export default OnboardingScreen