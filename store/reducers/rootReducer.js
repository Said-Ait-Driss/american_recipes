import { combineReducers } from "redux";
import RecipesReducer from "./recipeReducer.js";
import OurAppReducer from "./ourAppsReducer.js";

const saidRootReducer = combineReducers({
    recipes: RecipesReducer,
    ourApps: OurAppReducer,
});


export default saidRootReducer;
