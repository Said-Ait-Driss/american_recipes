import React,{ useState ,useEffect } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { Text , View , StyleSheet ,TouchableOpacity, Image,ActivityIndicator ,Dimensions } from "react-native";
import { GetLatestRecipesAction } from "../store/actions/recipesActions";
import { useDispatch, useSelector  } from "react-redux";

const windowWidth = Dimensions.get('window').width;

function Latest4Recipes({ navigation }) {

    const recipes = useSelector(state=>state.recipes);

    const lastestDispatch = useDispatch();

    useEffect(()=>{
        lastestDispatch(GetLatestRecipesAction());
    },[lastestDispatch]);

    const toSearchScreen = ( item )=>{
        navigation.navigate('Details', { recipe: item, onBack: () => refresh() });

    }

    return (
        <View style={styles.horizontalView}>
            <ScrollView
                horizontal={true}
            >
                {
                    recipes.complete ?
                    recipes.latest4Recipes.map( item=>{

                        return (
                            <TouchableOpacity
                                key={ item.id }
                                style={styles.horizontalCard} onPress={ ()=>toSearchScreen(item) }>
                                <Image source={ { uri: item.imageURL }} style={{ height:100,width:200 ,opacity:0.6}} />
                                <Text style={ styles.categoriText }>{ item.name.substring(0,20) }</Text>
                            </TouchableOpacity>
                        );
                    } )
                    :
                    <View style={{ height:40,flexDirection:"row" }}>
                        <View style={styles.indicator}>
                            <ActivityIndicator animating={true} size="large" color="#05A081" />
                        </View>
                        <View style={styles.indicator}>
                            <ActivityIndicator animating={true} size="large" color="#05A081" />
                        </View>
                        <View style={styles.indicator}>
                            <ActivityIndicator animating={true} size="large" color="#05A081" />
                        </View>
                    </View>
                }
                
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalView:{
        padding:5,
        marginVertical:2,
        marginBottom:4,
        borderColor:"#05A081",
        borderWidth:1,
        borderRadius:5
    },
    indicator:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        opacity:0.3,
        width:windowWidth/2
        // backgroundColor:"#000"
    },
    horizontalCard:{
        borderRadius:10,
    },
    categoriText:{
        position:"absolute",
        color:"#05A081",
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
        bottom:10,
        fontWeight:"bold"
    }
});

export default Latest4Recipes;