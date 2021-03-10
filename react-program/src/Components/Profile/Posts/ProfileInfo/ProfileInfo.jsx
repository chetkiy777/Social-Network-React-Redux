import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../../common/preloader/Preloader";
import userPhoto from './../../../../assets/img/userPhoto.jpg';
import ProfileStatusWithHook from "./ProfileStatusWithHooks";



const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    if (!profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div className={classes.descriptionBlock}>

                <img src={profile.photos.large != null ? profile.photos.large
                : userPhoto } />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHook status={status}  updateStatus={updateStatus} />

                <p>
                    {"aboutMe: " + profile.aboutMe}
                </p>
                <p>
                    {"lookingForAJob: " + profile.lookingForAJobDescription}
                </p>
                <p>
                    {"fullName: " + profile.fullName}
                </p>


            </div>
        </div>
    )
}

export default ProfileInfo;