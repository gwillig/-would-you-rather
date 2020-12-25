import { saveQuestion } from '../utils/api'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTIONS = "ADD_QUESTIONS"
export const SAVE_ANSWER = "SAVE_ANSWER"

export function receiveQuestions(questions){
    return{
        type:RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestions({ id, timestamp, author, optionOne, optionTwo }){
    return{
        type:ADD_QUESTIONS,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {

        const { authedUser } = getState()
        const questiondata = {
            optionOneText,
            optionTwoText,
            author: authedUser
        }

        return saveQuestion(questiondata )
            .then((question) => {
                //After successful request add question to store
                dispatch(addQuestions(question))
            })
            .catch( (error) => {
                alert('An Error occur, question was not submitted ')
            })
    }
}

function SaveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}
export function handleSaveAnswer(info) {
    return (dispatch) => {
        //this aptting the anyswer
        dispatch(SaveAnswer(info))
        console.log('Answer was saved')
    }
}

