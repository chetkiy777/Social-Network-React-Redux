import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsConteiner";
import UserContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";


const App = (props) => {
    return (<div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/users' render={() => <UserContainer />} />
                <Route path='/login' render={() => <LoginPage />} />

            </div>

        </div>

    )
}


export default App;
