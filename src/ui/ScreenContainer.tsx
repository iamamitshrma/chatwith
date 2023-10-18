import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
    children: any
}

const ScreenContainer = ({children}: Props) => {
  return (
    <View style={styles.container}>{children}</View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7f6feb",
    }
})

export default ScreenContainer;