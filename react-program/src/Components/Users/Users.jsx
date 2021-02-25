import React from 'react';
import Pagenator from "../../common/Pagenator/Pagenator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, onPageChange, currentPage, users, ...props}) => {
    return (<div>
            <Pagenator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChange={onPageChange}
                       currentPage={currentPage}/>
            <div>
                {
                    users.map(u => <User user={u} key={u.id}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow} unfollow={props.unfollow}/>
                    )
                }
            </div>
        </div>
    )
}

export default Users;