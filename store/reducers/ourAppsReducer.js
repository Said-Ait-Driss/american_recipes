const initState ={
    complete:false,
    ourApps:[],
} 

const OurAppReducer = ( state =initState , action )=>{
    
    switch ( action.type ){
        
        case "GET_OUR_APPS":
            return {
                complete:true,
                ourApps:action.ourApps,
            }
        
        default : return state;
    }
}

export default OurAppReducer;
