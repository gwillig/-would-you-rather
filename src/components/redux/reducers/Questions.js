import {RECEIVE_QUESTIONS, ADD_QUESTIONS,SAVE_ANSWER} from "../actions/Questions"


export default function questions(state={},action){

    switch(action.type){
        case SAVE_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
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
