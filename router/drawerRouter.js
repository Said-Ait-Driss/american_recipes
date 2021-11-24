import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeRoute";
import AboutStack from "./aboutRouter";
import OurApp from "./ourAppRouter";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SaidRouteDrawerNavigation = createDrawerNavigator({
    Home:{
        screen :HomeStack,
        navigationOptions:{
            drawerIcon: config => <FontAwesome
            size={20} name='home' />
        }
    },
    About:{
        screen :AboutStack,
        navigationOptions:{
            drawerIcon: config => <FontAwesome
            size={20} name='info' />,
        }
    },
    OurApp:{
        screen:OurApp,
        navigationOptions:{
            drawerIcon: config => <AntDesign
            size={20} name='appstore1' />
        }
    }
}
, {
    drawerWidth: 250,
    drawerPosition: 'left',
    drawerBackgroundColor:"#3B4053",
    contentOptions:{
        activeTintColor: "#05A081",
        itemStyle: { marginVertical: 3 }
    }
    });

export default createAppContainer(SaidRouteDrawerNavigation);