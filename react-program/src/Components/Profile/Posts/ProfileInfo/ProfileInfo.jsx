import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../../common/preloader/Preloader";
import myPhoto from './../../../../assets/img/myPhoto.jpg'
import ProfileStatusWithHook from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>

                <img src={props.profile.photos.large != null ? props.profile.photos.large
                : myPhoto } />

                <ProfileStatusWithHook status={props.status}  updateStatus={props.updateStatus} />

                <p>
                    {"aboutMe: " + props.profile.aboutMe}
                </p>
                <p>
                    {"lookingForAJob: " + props.profile.lookingForAJobDescription}
                </p>
                <p>
                    {"fullName: " + props.profile.fullName}
                </p>


            </div>
        </div>
    )
}

export default ProfileInfo;