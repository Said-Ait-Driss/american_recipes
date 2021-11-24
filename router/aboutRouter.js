import 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import React from 'react';
import Header from '../shared/header';

const screens ={
    About:{
        screen: About,
        navigationOptions:( { navigation} )=>{
            return {
                headerTitle:()=><Header navigation={navigation} title="About"/>
            }
        }
    }
}


const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#00ff00',
        headerStyle:{
            backgroundColor:"#3B4053",
            height:80
        }
    }
})
// AppRegistry.registerComponent(appName, () => App);

export default AboutStack;