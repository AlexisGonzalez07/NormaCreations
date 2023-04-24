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
    return <PageContainer style={{position: 'relative', flex: 1,  paddingTop: 0, zIndex: 1}}>
        <PageContainer style={{ position: "absolute", height: '92%',top: 0, width: '100%', paddingVertical: 0}}>{children}</PageContainer>
        <Navigation navigation={navigation} route={route}/>
    </PageContainer>
}

export default ScreenWrapper