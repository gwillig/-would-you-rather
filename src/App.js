
//Import of css files
import './index.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// External liberties
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {Row, Col, Tabs, Tab, Jumbotron} from 'react-bootstrap';
import React from 'react';

//Dumb components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//Smart components
import Home from './components/Home/Home'
import NewQuestion from './components/NewQuestion/NewQuestion';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {handleInitialData} from "./components/redux/actions/shared";
import {SET_AUTHED_USER} from "./components/redux/actions/authUser";


//redux

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    //style//
    app_style = {
        backgroundColor: '#19647e'
    }

    set_current_user(){
        /*
        * @description:
        * Write the name of the current user into the tab
        * */
        let current_user = this.props.authedUser.name

        return current_user

    }
    render(){
    return (
        <BrowserRouter >
            <Row style={this.app_style}>
                <Col>
                    <Header></Header>
                </Col>
            </Row>
            <Route  exact path='/' render={props => (

                <Login></Login>
            )}/>
            <Route  path='/home' render={props => (
                <div>

                    <Row style={this.app_style}>
                        <Col style={{paddingRight: ' 0px'}}>
                            <Tabs defaultActiveKey={'Home'}>
                                <Tab eventKey='Home' title='Home'>
                                    <Home></Home>
                                </Tab>
                                <Tab eventKey='NewQuestion' title='New Question'>
                                    <NewQuestion></NewQuestion>
                                </Tab>
                                <Tab eventKey='Leader_Board' title='Leader Board'>
                                    <LeaderBoard></LeaderBoard>
                                </Tab>
                                <Tab disabled  eventKey='logout_user11' title={`Hello, ${this.set_current_user()}`}>
                                </Tab>
                                <Tab  eventKey='logout_user11' title="Logout">
                                    <Jumbotron>
                                        <Link to='/'>
                                            <button  className='btn btn-primary btn-block'>Logout</button>
                                        </Link>
                                    </Jumbotron>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    <Row noGutters={true} style={this.app_style}>
                        <Footer></Footer>
                    </Row>
                </div>
            )}

            />
        </BrowserRouter>

    );
}
}

function mapStatetoProps({users,authedUser}){
    return{
        authedUser:users[authedUser]
    }
}


export default connect(mapStatetoProps)(App);
