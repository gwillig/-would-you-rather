import {combineReducers} from 'redux'
import authedUser from "./authedUser";
import users from "./Users";
import questions from "./Questions";

export default combineReducers({
    users,
    questions,
    authedUser
})

