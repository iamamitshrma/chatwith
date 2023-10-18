import { Button } from '@rneui/base'
import React from 'react'

type Props = {
    children: any,
    handlePress: any
}

const ButtonItem = ({children, handlePress}: Props) => {
  return (
    <Button onPress={handlePress}>{children}</Button>
  )
}

export default ButtonItem