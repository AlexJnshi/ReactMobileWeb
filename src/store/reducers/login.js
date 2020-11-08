export default function logIn(state="",action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case "LOGIN":
            return action.user
        case "LOGOUT":
            return ""
    }
    return state
}
