import axios from "axios";

export const UserService = {
    //create new account
    signup(userData: any): Promise<any> {
        const response = axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/signup',
            data: {
                username: userData.username,
                password: userData.password,
                email: userData.email
            }
            }).catch(err => {
                console.error(err);
                return err;
            });
            return response.then(res => {
                console.log(res);
                return res;
            })
    },

    //login to the game
    signin(userData: any): Promise<any> {
        const response = axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/signin',
            data: {
                 username : userData.username,
                password: userData.password
            }
        }).catch(err => {
            console.error(err);
            return err.response;
        })
        return response.then(res => {
            console.log(res);
            axios.defaults.headers.common['x-access-token'] = res?.data.accessToken;
            return res;
        });
    }

}