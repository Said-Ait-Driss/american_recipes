import React,{useEffect} from "react";
import { View ,Text, Image ,StyleSheet ,Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {AdMobBanner,AdMobInterstitial,} from 'expo-ads-admob';


const windowWidth = Dimensions.get('window').width;


function Details( { navigation } ) {

    const recipe =navigation.getParam('recipe');
    const myBannerAdsId ="ca-app-pub-9785911494416955/4768310678";

    useEffect(async()=>{
        // Display an interstitial
        await AdMobInterstitial.setAdUnitID('ca-app-pub-9785911494416955/3036426604'); 
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
        await AdMobInterstitial.showAdAsync();
    });
    
    return (

        <View style={styles.container}>
            <ScrollView >
                    <Image source={ { uri: recipe.imageURL } } style={ {
                        width: (windowWidth-20), 
                        height: 250,
                    }} />
                    <Text style={ styles.recipeName }>{ recipe.name  }</Text>
                    <AdMobBanner
                            bannerSize="banner"
                            adUnitID={myBannerAdsId}
                            servePersonalizedAds ={false} />
                    <Text style={ styles.recipeIngredients }>Ingredients:</Text>
                    <View style={styles.parent}>
                        <FlatList 
                            // numColumns={1}
                            data={ recipe.ingredients } 
                            keyExtractor={ (item ,index)=>String(index) } 
                            renderItem={ ({item})=>(
                                <View style={ styles.renderItem }>
                                    <Text style={styles.textAlign}>{ item.name }</Text>
                                </View>
                                )
                            }
                        />
                        <FlatList 
                            // numColumns={1}
                            data={ recipe.ingredients } 
                            keyExtractor={ (item ,index)=>String(index) } 
                            renderItem={ ({item})=>(
                                <View style={ styles.renderItem }>
                                    <Text style={styles.textAlign}>{ item.type }</Text>
                                </View>
                                )
                            }
                        />
                        <FlatList 
                            // numColumns={1}
                            data={ recipe.ingredients } 
                            keyExtractor={ (item ,index)=>String(index) } 
                            renderItem={ ({item})=>(
                                <View style={ styles.renderItem }>
                                    <Text style={styles.textAlign}>{ item.quantity }</Text>
                                </View>
                                )
                            }
                        />
                    </View>
                    <AdMobBanner
                            bannerSize="banner"
                            adUnitID={myBannerAdsId}
                            servePersonalizedAds ={false} />
                    <Text style={ styles.recipeIngredients }>Steps:</Text>
                    <FlatList 
                            // numColumns={1}
                            data={ recipe.steps } 
                            keyExtractor={ (item ,index)=>String(index) } 
                            renderItem={ ({item,index})=>(
                                <View style={ styles.renderItem2 }>
                                    <Text style={ { color:"yellow",paddingHorizontal:5 } }>{ index +1 +" )"}</Text>
                                    <Text style={styles.textAlign}>{ item }</Text>
                                </View>
                                )
                            }
                        />
                        <AdMobBanner
                            bannerSize="banner"
                            adUnitID={myBannerAdsId}
                            servePersonalizedAds ={false} />
            </ScrollView>

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#303546',
        height:"100%",
        alignItems:"center"
    },
    recipeName:{
        textAlign:"center",
        color:"#05A081",
        padding:10,
        fontSize:21
    },
    recipeIngredients:{
        fontSize:18,
        marginTop:11,
        padding:5,
        textAlign:"center",
        borderRadius:5,
        color:"#DDD",
        textTransform:"uppercase",
        borderBottomWidth:2,
        marginBottom:10,
        backgroundColor:"rgba(5,160,129,0.4)",
        borderColor:"#05A081"
    },
    parent:{
        flex:1,
        flexDirection:"row"
    },
    renderItem:{
        padding:4,
        height:46,
        borderColor:"#05A081",
        width:(windowWidth/3)-7,
        marginVertical:4,
        borderRightColor:"#05A081",
        borderLeftColor:"#05A081",
        borderWidth:1,
        backgroundColor:"#444",
        paddingVertical:13,
        borderRadius:5,
    },
    renderItem2:{
        padding:4,
        paddingVertical:13,
        width:(windowWidth)-24,
        marginVertical:4,
        backgroundColor:"#444",
        borderColor:"#05A081",
        borderWidth:1,
        borderRadius:10,

    },
    textAlign:{
        textAlign:"center" ,
        color:"#ccc",
        fontWeight:"bold"
    }
})
export default Details;