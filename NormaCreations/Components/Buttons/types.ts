import {ReactNode} from 'react'
import { StyleProp, ViewStyle } from 'react-native'
export interface PressingProps {
    children: ReactNode,
    style?: StyleProp<ViewStyle>,
    content?: string,
    onPress: () => void,
}