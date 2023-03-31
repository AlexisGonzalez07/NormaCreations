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
    return <PageContainer style={{position: 'relative', flex: 1, backgroundColor: 'red', paddingTop: 0}}>
        <PageContainer style={{minHeight: '90%', backgroundColor: 'red', position: "absolute", top: 0}}>{children}</PageContainer>
        <Navigation navigation={navigation} route={route}/>
    </PageContainer>
}

export default ScreenWrapper