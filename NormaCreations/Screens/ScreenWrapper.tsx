import React, { FunctionComponent } from "react";
import PageContainer from "../Components/Containers/PageContainer";
import Navigation from "../Navigation/navigation";
import {ReactNode} from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ContainerProps } from "../Components/Containers/types";
import { NavigationProps } from "../Navigation/types";

type WrapperProps  = ContainerProps & NavigationProps

const ScreenWrapper: FunctionComponent <WrapperProps> = (props) => {
    const {navigation,route,children} = props
    return <PageContainer>
        {children}
        <Navigation navigation={navigation} route={route}/>
    </PageContainer>
}

export default ScreenWrapper