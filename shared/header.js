import React,{useState} from "react";
import { Text,View,StyleSheet ,TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from 'react-native';
import { useDispatch  } from "react-redux";
import { GetSearchRecipesAction } from "../store/actions/recipesActions";


export default function Header ( { navigation ,title } ){

    const [ isSearch , setIsSearch ] =useState(false);
    const [ searchText , setSearchText ] =useState("");
    const [ isEnd ,setIsEnd ] =useState(false);

    const headerDispatch = useDispatch();

    const openMenu =( )=>{
        navigation.openDrawer();
    }

    const openSearch =()=>{
        if( isSearch ){
            setIsSearch(false);
            searchHandler();

        }else{

            setIsSearch(true);

        }

    }


    const searchHandler =()=>{
        // Alert.alert(searchText);
        setIsEnd(true);

        headerDispatch(GetSearchRecipesAction( searchText ,setIsEnd))
        setIsSearch(false);
    }

    return(
        <View style={ styles.header }>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu}/>
            <View>
                {
                    isSearch ?
                    <TextInput style={styles.input}
                        onChangeText={setSearchText}
                        value={searchText}
                        autoFocus={true}
                        placeholder="Search for an recipe"
                        />
                    :
                    <Text style={styles.headerText}>{ title }</Text>
                }
            </View>
            {
                title === "American Recipes " ?
                <MaterialIcons name="search" size={28} style={styles.searchIcon} onPress={openSearch} color={ isSearch ? "#05A081" : "#191A23"}/>
                :null
            }

        </View>
    );
}

const styles=StyleSheet.create({
    indicator:{
        position:"absolute",
        top:"50%",
        left:"50%"
    },
    header:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"#05A081",
        letterSpacing:1
    },
    icon:{
        position:"absolute",
        left:0
    },
    searchIcon:{
        position:"absolute",
        right:0,
    },
    input:{
        color:"#05A081",
        width:Dimensions.get('window').width-130,
        height:40,
        borderColor:"#05A081",
        borderWidth:1,
        paddingHorizontal:10,
        borderRadius:6,
    }
})