import React from 'react';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import MyPostContainer from "./Posts/MyPosts/MyPostConteiner";


const Profile = ({profile, status, updateStatus}) => {

    return (
        <div>
            <ProfileInfo profile={profile} status={status}  updateStatus={updateStatus}/>
            <MyPostContainer />
        </div>
    )
}


export default Profile;