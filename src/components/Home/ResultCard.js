import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";



class ResultCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
        this.choosenAnswer=""
        this.total_optionOne=""
        this.total_optionTwo=""
        this.total=""
    }


    style_card={
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border:" 1px solid #19647e",
        borderRadius: "50px",
        padding: "30px",
        margin:"10px"

    }

    avatar_style={
        width:"100px"
    }

    viewBtn_style={
        backgroundColor: "#19647e",
        borderColor: "#f0f8ff00",

    }
    col_styl={
        padding:'10px'
    }

    handleClick() {
        /*
        * @description:
        * Show on click the details of a question*/
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    calculateResult(){
        /*
        *@description:
        * Caclulate the result*/
        // Calculate the percentage per answer
        let total_optionOne = this.props.question.optionOne.votes.length
        let total_optionTwo = this.props.question.optionTwo.votes.length
        let total = total_optionOne+total_optionTwo
        this.setState({total_optionOne,total_optionTwo, total})
    }
    render() {




        return (
            <Container>
                {(() => {

                    if (this.state.isToggleOn) {
                        return(
                            <Row id={this.props.id}style={this.style_card} >
                                <Col md="4" lg="4" style={this.col_styl}>
                                    <img style={this.avatar_style}
                                         src={this.props.question.avatarURL}
                                         alt="user">
                                    </img>
                                </Col>
                                <Col xs md="6" lg="6" style={this.col_styl}>
                                    <h5>Would you rather {this.props.question.optionOne.text}</h5>
                                    <button onClick={(e) => {this.handleClick(e);this.calculateResult()}} style={this.viewBtn_style} className="btn btn-primary btn-block" >View Poll</button>

                                </Col>
                            </Row>
                        )
                    }
                    else{
                        return(
                            <Row id={this.props.id}style={this.style_card} >
                                <Col xs lg="3" style={this.col_styl}>

                                    <img style={this.avatar_style}
                                         src={this.props.question.avatarURL}
                                         alt="user">

                                    </img>
                                </Col>
                                <Col style={this.col_styl}>
                                    <div className="align-items-left" >
                                        <ul style={{textAlign: "left"}}>
                                            <li>{this.props.question.optionOne.text}
                                                <ul>
                                                    <li>{this.state.total_optionOne} out of {this.state.total} ({this.state.total_optionOne/this.state.total}%)
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>{this.props.question.optionTwo.text}
                                                <ul>
                                                    <li>
                                                        {this.state.total_optionTwo} out of {this.state.total} ({this.state.total_optionTwo/this.state.total}%)
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <Button  style={this.viewBtn_style}onClick={this.handleClick.bind(this)} >
                                            Return
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        )
                    }

                })()}
            </Container>


        )
    }
}

export default ResultCard
