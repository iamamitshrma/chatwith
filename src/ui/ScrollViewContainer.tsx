import React from 'react'
import { ScrollView } from 'react-native'

type Props = {
    children: any
}

const ScrollViewContainer = ({ children }: Props) => {
    return (
        <ScrollView 
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    )
}

export default ScrollViewContainer