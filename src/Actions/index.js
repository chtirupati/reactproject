import Axios from "axios";
//Global Api
// const url="http://jsonplaceholder.typicode.com/users";

export function EmpActions() {

    //our own api call
    const url = "http://localhost:3000/react173";

    return {
        type: 'Employee',
        payload: [

            { id: 1, name: 'Thirupathi', email: 'chtirupati@gmail.com', phone: 995990333 },
            { id: 2, name: 'Pranavi', email: 'pranavi@gmail.com', phone: 9963265023 },
            { id: 3, name: 'Sahasra', email: 'sahasra@gmail.com', phone: 7780121551 },
            { id: 4, name: 'Sagan', email: 'sagan@gmail.com', phone: 9912490364 }
        ]

        /*payload : Axios.get(url).then((res)=>res.data)*/
    }
}

export function UsersAction() {
    const url = "http://localhost:3000/react173";

    return (
        {
            type: 'users',
            payload: Axios.get(url).then((res) => res.data)
        })

}


export function GlobalUserAction() {
    const url = "https://jsonplaceholder.typicode.com/users";

    return (
        {
            type: 'globalusers',
            payload: Axios.get(url).then((res) => res.data)
        })

}