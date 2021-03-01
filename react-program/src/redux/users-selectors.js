import {createSelector} from "reselect";

const gelAllUsers = (state) => {
    return state.usersPage.users;
};

export const getUsersSelector = createSelector(gelAllUsers ,
    (users) => {
    return users.filter(u => true)
    });

const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getPageSizeSelector = createSelector(getPageSize ,
    (pageSize) => {
    return pageSize
    });

const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalItemsCount
};

export const getTotalUsersCount = createSelector(getTotalUsersCountSelector ,
    (totalItemsCount) => {return totalItemsCount
});

const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
};

export const getCurrentPage = createSelector(getCurrentPageSelector,
    (currentPage) => {return currentPage
});

const getSsFetchingSelector = (state) => {
    return state.usersPage.isFetching
};

export const getSsFetching = createSelector(getSsFetchingSelector,
    (isFetching) => {return isFetching
});

const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
};

export const getFollowingInProgress = createSelector(getFollowingInProgressSelector,
    (followingInProgress) => {return followingInProgress
});

