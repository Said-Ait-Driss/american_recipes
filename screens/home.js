import React from 'react';
import { StyleSheet, View } from 'react-native';
import Recipes from "../shared/recipes";
import Latest4Recipes from '../layouts/latest4Recipes';


export default function Home( { navigation }){

    //  my app id =ca-app-pub-9785911494416955~3419569988
    // my app id = ca-app-pub-9785911494416955~3419569988


    // banner ad id=ca-app-pub-9785911494416955/4768310678
    // inter id =ca-app-pub-9785911494416955/3036426604
    
    return(
        <View style={ styles.container }>
            <Latest4Recipes navigation={navigation}/>
            <Recipes navigation={navigation} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303546',
    },
});