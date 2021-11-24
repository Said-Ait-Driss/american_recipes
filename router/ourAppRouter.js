import 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation-stack";
import OurApp from "../screens/ourApp";
import React from 'react';
import Header from '../shared/header';

const screens ={
    OurApp:{
        screen: OurApp,
        navigationOptions:( { navigation} )=>{
            return {
                headerTitle:()=><Header navigation={navigation} title="Our Apps"/>
            }
        }
    }
}


const OurAppStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#00ff00',
        headerStyle:{
            backgroundColor:"#3B4053",
            height:80
        }
    }
})
// AppRegistry.registerComponent(appName, () => App);

export default OurAppStack;