// export default function EmpReducer(state = '', action) {
    let initialstate=[]
    export default function (state = initialstate, action) {

    switch (action.type) //action/filename.js-->return(typle:'name..')
    {
        //action.type=Employee

        case "Employee":
            return action.payload; break;

        default:
            return state;
    }
}