import React from 'react'
import {Jumbotron, Tab, Tabs, Container} from "react-bootstrap";
import QuestionCard from './QuestionCard'
import {connect} from 'react-redux'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  selectedKey:"unanswered_question"}
    }

    filterquerstion(){
        /*
        * @desipot*/

    }
    tab_style={
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border:" 2px solid #19647e",


    }

    handleSelect = (key) => {
        /*
        * @description:
        * Set the current selected tab
        * */
        this.setState({ selectedKey:key })

    }

    render() {

        //1.Step: Current user
        let current_user = this.props.authedUser
        let current_user_id = current_user.id
        //2. Step: Convert questions to array
        const questions_array = Object.values(this.props.questions)
        //2.Step: Find all question which current user hasnt answered
        debugger
        let answered_questions = questions_array.filter(question=>
            question.optionOne.votes.includes(current_user.id)||
            question.optionTwo.votes.includes(current_user.id)

        )
        let unanswered_questions = questions_array.filter(question=>
            !question.optionOne.votes.includes(current_user.id)||
            !question.optionTwo.votes.includes(current_user.id)

        )
        ///HIer weitermachen, render cards!


        return (
            <Jumbotron className="d-flex align-items-center min-vh-50">
                <Container style={{maxWidth:"600px"}} className="text-center  max-w-1">
                    <div style={this.tab_style}>
                        <Tabs  defaultActiveKey={"unanswered_question"}  onSelect={this.handleSelect} >
                            <Tab  eventKey="unanswered_question" title="Unanswered Question">
                                {unanswered_questions.map(el=>
                                    <QuestionCard selectedKey={this.state.selectedKey} id={"Card"}></QuestionCard>
                                )}

                            </Tab>
                            <Tab eventKey="answered_question" title="Answered Question">
                                <QuestionCard selectedKey={this.state.selectedKey} id={"Card"}></QuestionCard>
                            </Tab>
                        </Tabs>
                    </div>

                </Container>
            </Jumbotron>

        )
    }
}

function mapStatetoProps({users,authedUser,questions}){
    return{questions,authedUser:users[authedUser]

        // questionIds:Object.keys(questions)
        //     .sort((a,b)=>questions[a].timestamp - questions[b].timestamp )
    }
}
export default connect(mapStatetoProps)(Home)
