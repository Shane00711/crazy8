import axios from "axios"

export const GameService = {
    createNewGame(): Promise<any> {
        const response = axios({
            method: 'post',
            url: 'htpp://localhost:8080/api/game/create',
            data: {
                gamename: 'TestGame',
                type: 'private',
                player: [
                    'testuser',
                    'testuser2'
                ]
            }
        }).catch(err => {
            console.error(err);
            return err;
        });

        return response.then(res => {
            console.log(res);
            return res;
        });
    },

    joinExistingGame(): Promise<any> {
        const response = axios({
            method: 'post',
            url: 'http://localhost:8080/api/game/join',
            data : {gamename: 'testgame',
            type: 'private',
            username: 'testuser'}
        }).catch(err => {
            console.error(err);
            return err;
        });
        return response.then(res => {
            return res;
        })
    },

    checkGameName(testname: string): Promise<any> {
        const response = axios({
            method: 'get',
            url: 'http://localhost:8080/api/game/checkname',
            params: {name: testname}
        }).catch(err => {
            console.error(err);
            return err;
        });
        return response.then(res => {
            return res;
        });
    }
}