import {ReactNode} from 'react'
import { StyleProp, ViewStyle, PressableProps, GestureResponderEvent } from 'react-native'
export interface PressingProps extends PressableProps {
    children?: ReactNode,
    style?: StyleProp<ViewStyle>,
    content?: string,
    onPress: (event: GestureResponderEvent) => void,
    active?: boolean
}