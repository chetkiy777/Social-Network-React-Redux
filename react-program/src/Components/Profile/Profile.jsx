import React from 'react';
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";
import MyPostContainer from "./Posts/MyPosts/MyPostConteiner";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}


export default Profile;