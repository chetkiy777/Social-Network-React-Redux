import * as axios from 'axios';

const instance = axios.create ({
    withCredentials: true ,
    headers: {"API-KEY": "db3d1e63-29ad-4786-a53c-8baa55aeae42" } ,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const userAPI = {
    getUsers(userPage = 1, pageSize = 10) {
        return instance.get(`users?page=${userPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    onPageChange(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status` , {status: status});
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image" , photoFile);
        return instance.put(`/profile/photo` ,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile` , profile)
    }
};


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login (email , password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email , password , rememberMe, captcha});
    },
    logout () {
        return instance.delete('auth/login');
    }

};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
    getStarWars() {
        return axios.get(`http://swapi.dev/api/people/`).then(response => {
            return (response.data.results)
        })
    }

};