import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers, setCurrentPage,
    toggleFollowingInProgress,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/preloader/Preloader'
import {compose} from "redux";
import {
    getUsersSelector,
    getCurrentPage,
    getFollowingInProgress,
    getSsFetching,
    getTotalUsersCount, getPageSizeSelector
} from "../../redux/users-selectors";



class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage , this.props.pageSize)
    }
    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      toggleFollowingInProgress={this.props.toggleFollowingInProgress} />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getSsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose(
    connect(mapStateToProps , {follow, unfollow, getUsers, setCurrentPage, toggleFollowingInProgress}),
)(UserContainer)



