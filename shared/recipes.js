import React ,{ useEffect, useState } from "react";
import { View ,StyleSheet ,Text ,Image ,FlatList ,TouchableOpacity ,ActivityIndicator } from "react-native";
import { Dimensions } from 'react-native';
import { useDispatch ,useSelector } from "react-redux";
import { GetLatestRecipesAction } from "../store/actions/recipesActions";
import {AdMobInterstitial} from 'expo-ads-admob';


const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

function Recipes({ navigation }) {

    const [showLoader,setShowLoader] =useState(true);
    const homeDispatch = useDispatch();
    const recipes =useSelector(state=>state.recipes);

    useEffect( ()=>{
        navigation.addListener ('willFocus', () =>{
            homeDispatch( GetLatestRecipesAction() );
        });
    },[navigation]);

    useEffect(async()=>{
        // Display an interstitial
        await AdMobInterstitial.setAdUnitID('ca-app-pub-9785911494416955/3036426604'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
        await AdMobInterstitial.showAdAsync();
    });
    
    useEffect(()=>{
        homeDispatch( GetLatestRecipesAction() );
    },[homeDispatch]);

    const showRecipe=( item )=>{
        navigation.navigate('Details', { recipe: item ,onBack: () => refresh()});
    }
    return (
        <View style={ styles.container }>
            <Text style={ styles.recipeTitle }>{ recipes.complete ? recipes.recipes.length : 0 } Recipes Found </Text>
            {
                recipes.complete ?
                recipes.recipes.length >0 ?
                <FlatList  
                    numColumns={2} // split to two columns rather than 1
                    keyExtractor={ (item ,index)=>String(index+'s'+item.id) } 
                    data={ recipes.recipes } 
                    renderItem={ ({item})=>(
                    <View>
                        <TouchableOpacity onPress={()=>showRecipe( item )}>
                            <Image source={ {uri: item.imageURL } } style={{
                                width: (windowWidth/2), 
                                height: 250,
                                shadowColor:"#05A081",
                                shadowOffset:{
                                    width:20,
                                    height:20
                                },
                                shadowOpacity:0.5
                                }} />
                            <Text style={ styles.recipeName }>{ item.name }</Text>
                        </TouchableOpacity>
                    </View>
                ) } 
                />
                :
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>Oops Not Data ?</Text>
                    <Text style={styles.noDataText2}>Please try again ... !</Text>
                </View>
                :
                <View style={styles.indicator}>
                    <ActivityIndicator animating={showLoader} size="large" color="#05A081" />
                </View>
            }
            
        </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    indicator:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        opacity:0.3,
        backgroundColor:"#000"
    },
    noDataContainer:{
        flex:1,
        height:"100%",
    },
    noDataText:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:10,
        color:"#05A081"
    },
    noDataText2:{
        fontSize:17,
        textAlign:"center",
        marginVertical:"auto"
    },
    recipeTitle:{
        textAlign:"center",
        color:"#3B4053",
        padding:6,
        fontWeight:"bold",
        backgroundColor:"#05A081"
    },
    recipeName:{
        textAlign:"center",
        position:'absolute',
        bottom:0,
        padding:10,
        width:"100%",
        backgroundColor:"rgba(5,160,129,0.4)",
        fontWeight:"bold",
        color:"#fff"
    }
})

export default Recipes;