export default function works(state={
    data: [],
    loading: false,
    loadEnd: false,
    page: 1 
},action){
    // eslint-disable-next-line default-case
    switch(action.type){
        /*** loading data */
        case "LOAD":
            return {
                ...state,
                loading: true
            };
        /*** when loading end, going to refresh data */
        case "LOADOVER":
            return {
                ...state,
                loading: false,
                page: ++state.page,
                data: state.data.concat(action.data)
            };   
        /*** after data query */
        case "LOADEND": 
            return {
                ...state,
                loadEnd: true
            }         
    };
    return state
}