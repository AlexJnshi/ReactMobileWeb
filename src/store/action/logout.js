//Had server problem,can not login, can't check login state,this function is not in use
import HTTP from "./http";
export default function logOut(data){
    return function(dispatch){
       return HTTP.post("/user/logout").then(res=>{
            if(res.data.code === 0){
                dispatch({
                    type: "LOGOUT"
                });
            }
        })
    }
}