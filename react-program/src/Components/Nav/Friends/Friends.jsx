import React from 'react';
import classes from './Friends.module.css'

const Friends = (props) => {

    return (
        <div>
            <h2>Friends</h2>
            <div className={classes.own}>
                <div>{props.dialogsData[0].name}</div>

                <div>{props.dialogsData[1].name}</div>

                <div>{props.dialogsData[2].name}</div>
            </div>
        </div>
    )
}

export default Friends;