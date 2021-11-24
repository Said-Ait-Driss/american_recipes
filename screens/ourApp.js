import React ,{ useEffect } from "react";
import { View ,Text ,StyleSheet,Dimensions ,Linking ,Image,FlatList,ActivityIndicator,TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getOurAppAction } from "../store/actions/ourAppActions";

const windowWidth = Dimensions.get('window').width;


function OurApp() {

    const ourAppDispatch = useDispatch();

    const ourApps = useSelector(state=>state.ourApps);

    useEffect(()=>{
        ourAppDispatch(getOurAppAction() );
    },[ourAppDispatch]);

    return (
        <View style={ styles.container }>
            {
                ourApps.complete ?
                ourApps.ourApps.length >0 ?
                <View style={styles.container}>
                    <FlatList  
                        numColumns={4} // split to two columns rather than 1
                        keyExtractor={ (item ,index)=>String(index+'s'+item.id) } 
                        data={ ourApps.ourApps }
                        renderItem={ ({item})=>(
                        <View>
                            <TouchableOpacity onPress={()=>{Linking.openURL(`market:${item.link}`);}}>
                                <Image source={ {uri: item.imageURL } } style={{
                                    width: 100, 
                                    height: 100,
                                    padding:5,
                                    marginBottom:5,
                                    marginTop:10, 
                                    shadowColor:"#05A081",
                                    shadowOffset:{
                                        width:20,
                                        height:20
                                    },
                                    shadowOpacity:0.5
                                    }} />
                                <Text style={{textAlign:"center",color:"#ccc"}}>{ item.name  }</Text>
                            </TouchableOpacity>
                        </View>
                    ) } 
                    />
            </View>
            :
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>Oops Not Data ?</Text>
                    <Text style={styles.noDataText2}>Please try again ... !</Text>
                </View>
                :
                <View style={styles.indicator}>
                    <ActivityIndicator animating={true} size="large" color="#05A081" />
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#303546',
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
})

export default OurApp;