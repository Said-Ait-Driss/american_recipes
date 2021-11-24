import { url ,apiKey } from "../../config/baseUrl";

export const GetLatestRecipesAction=()=>{

    return (dispatch , getState )=>{
        url.post(`getRecipes.api.php?token=${apiKey.trim()}`)
        .then( response =>{
            
            if(response.status === 200 && response.data.status===1){
                dispatch({
                    type:"GET_RECIPES",
                    recipes:response.data.recipes,
                    latest4Recipes:response.data.recipes,
                    count:response.data.count
                });
            }else{
                dispatch({
                    type:"GET_RECIPES",
                    recipes:[]
                });
            }
        })
        .catch( err =>{
            dispatch({
                type:"GET_RECIPES",
                recipes:[]
            });
        });
    }
}


export const GetSearchRecipesAction=(search ,setIsEnd)=>{

    return(dispatch,getState)=>{
        
        // dispatch({
        //     type:"BEGIN_SEARCH_RECIPES",
        //     recipes:[],
        // });

        url.post(`getRecipes.api.php?token=${apiKey.trim()}`)
        .then( response =>{
            if(response.status === 200 && response.data.status===1){

                let recipes1=response.data.recipes.filter( item => {
                    if(item.name.includes(search) ) return item; 
                });

                dispatch({
                    type:"GET_SEARCH_RECIPES",
                    recipes:recipes1
                });
            }else{
                dispatch({
                    type:"GET_SEARCH_RECIPES",
                    recipes:[]
                });
            }
            setIsEnd(false);
        })
        .catch( err =>{
            dispatch({
                type:"GET_SEARCH_RECIPES",
                recipes:[]
            });
            setIsEnd(false);
        });
    }
}