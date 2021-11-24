const initState ={
    complete:false,
    recipes:[],
    latest4Recipes:[]
} 

const RecipesReducer = ( state =initState , action )=>{
    
    switch ( action.type ){
        
        case "GET_RECIPES":
            return {
                complete:true,
                recipes:action.recipes,
                latest4Recipes:action.latest4Recipes.slice(action.latest4Recipes.length-5,action.latest4Recipes.length-1)
            }
        case "BEGIN_SEARCH_RECIPES":
            return {
                ...state,
                complete:false,
                recipes:[]
            }
        case "GET_SEARCH_RECIPES":
            return {
                ...state,
                complete:true,
                recipes:action.recipes
            }
        default : return state;
    }
}

export default RecipesReducer;
