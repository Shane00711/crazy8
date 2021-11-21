import axios from "axios";

export const PlayerService = {
    searchPlayers: (username: string): Promise<any> => {
        const response = axios({
            method: "GET",
            url: 'http://localhost:8080/api/user/search',
            params: {
                username: username
            },
        }).catch(error => {
            console.log(error);
            return error;
        });

        return response.then(response => {
            return response.data;
        });
    },
    getallplayers: (): Promise<any> => {
        const response = axios({
            method: "GET",
            url: 'http://localhost:8080/api/user/findAll',
        }).catch(error => {
            console.log(error);
            return error;
        });

        return response.then(response => {
            return response.data;
        });
    },
    
}