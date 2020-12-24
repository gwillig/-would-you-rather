import {getInitialData} from "../utils/api";
import {receiveQuestions} from "./Questions";
import {receiveUsers} from "./Users";


const AUTH_ID =""

//Asynchronous Request
export function handleInitialData(){
    return(dispatch)=>{
        return getInitialData()
            .then(({users,questions})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveUsers(questions))
            })
    }
}
