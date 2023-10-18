import { Input } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'
import ButtonItem from '../ui/ButtonItem'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const OTPScreen = (props: Props) => {
    const navigation  = useNavigation<any>();
  return (
    <View>
        <Input placeholder='Enter your name'/>
        <ButtonItem handlePress={() => navigation.navigate("BottomTabNavigation")}>Verify and Login</ButtonItem>
    </View>
  )
}

export default OTPScreen