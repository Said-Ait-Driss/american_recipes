import { url ,apiKey } from "../../config/baseUrl";


export const getOurAppAction=()=>{

    return (dispatch , getState )=>{
        url.post(`getOurApps.api.php?token=${apiKey.trim()}`)
        .then( response =>{
            console.log(response);
            if(response.status === 200 && response.data.status===1){
                dispatch({
                    type:"GET_OUR_APPS",
                    ourApps:response.data.ourApps,
                });
            }else{
                dispatch({
                    type:"GET_OUR_APPS",
                    ourApps:[]
                });
            }
        })
        .catch( err =>{
            dispatch({
                type:"GET_OUR_APPS",
                ourApps:[]
            });
        });
    }
}
