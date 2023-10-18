import { Avatar, Input } from '@rneui/base'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonItem from '../ui/ButtonItem'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const LoginScreen = (props: Props) => {

  const navigation = useNavigation<any>()
  return (
    <ScrollView>
      <Avatar
        rounded
        size={150}
        containerStyle={{ alignSelf: "center" }}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      <Input placeholder='Enter your name' />
      <Input placeholder='Enter your email' />
      <ButtonItem handlePress={() => navigation.navigate("OTPScreen")}>Send OTP</ButtonItem>
    </ScrollView>
  )
}

export default LoginScreen