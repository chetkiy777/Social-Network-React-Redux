import {createSelector} from "reselect";

const gelAllUsers = (state) => {
    return state.usersPage.users;
};

export const getUsersSelector = createSelector(gelAllUsers ,
    (users) => {
    return users.filter(u => true)
    })

const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getPageSizeSelector = createSelector(getPageSize ,
    (pageSize) => {
    return pageSize
    })

const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
};

export const getTotalUsersCount = createSelector(getTotalUsersCountSelector ,
    (totalUsersCount) => {
    return totalUsersCount
    } )

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getSsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

