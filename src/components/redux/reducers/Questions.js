import {RECEIVE_QUESTIONS, ADD_QUESTIONS} from "../actions/Questions"


export default function questions(state={},action){

    switch(action.type){
        case ADD_QUESTIONS:
            return {
                ...state,
                [action.id]: action
            }
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        default:
            return state
    }

}
