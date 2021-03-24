import React, {Component} from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
// import DialogsContainer from "./Components/Dialogs/DialogsConteiner";
import UserContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/preloader/Preloader";
import Friends from "./Components/Nav/Friends/Friends";
const DialogsContainer = React.lazy(() => import ('./Components/Dialogs/DialogsConteiner'));
const ProfileContainer = React.lazy(() => import ('./Components/Profile/ProfileContainer'));



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                        <DialogsContainer/>
                        </React.Suspense>}}/>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                        <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/users' render={() => <UserContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>

                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})



export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

