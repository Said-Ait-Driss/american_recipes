import 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Details from "../screens/details";
import React from 'react';
import Header from '../shared/header';

const screens ={
    Home:{
        screen: Home,
        navigationOptions:( { navigation} )=>{
            return {
                headerTitle:()=><Header navigation={navigation} title="American Recipes "/>
            }
        }
    },
    Details:{
        screen: Details,
        navigationOptions:{
            title:'Recipe Details',
            headerStyle:{
                backgroundColor:"#3B4053",
            }
        }
    }
}


const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#05A081',
        headerStyle:{
            backgroundColor:"#3B4053",
            height:80,
            // paddingBottom:5
        }
    }
})
// AppRegistry.registerComponent(appName, () => App);

export default HomeStack;