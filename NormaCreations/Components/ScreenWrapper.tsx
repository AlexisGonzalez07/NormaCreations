import React, { FunctionComponent } from "react";
import PageContainer from "./Containers/PageContainer";
import Navigation from "../Navigation/navigation";
import {ReactNode} from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ContainerProps } from "./Containers/types";
import { NavigationProps } from "../Navigation/types";

type WrapperProps  = ContainerProps & NavigationProps

const ScreenWrapper: FunctionComponent <WrapperProps> = (props) => {
    console.log(props)
    const {navigation,route,children} = props
    return <PageContainer>
        {children}
        <Navigation navigation={navigation} route={route}/>
    </PageContainer>
}

export default ScreenWrapper