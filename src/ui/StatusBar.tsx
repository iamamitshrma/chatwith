import React from 'react'
import { StatusBar } from 'react-native'

type Props = {
    bgColor: string
}

const Status = ({bgColor}: Props) => {
  return (
    <StatusBar backgroundColor={bgColor} />
  )
}

export default Status