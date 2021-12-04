import axios from "axios"

export const GameService = {
    
    createNewGame(gamename: string, playerIds: any): Promise<any> {
        console.log("createNewGame", gamename, playerIds)
        const response = axios({
            method: 'post',
            url: 'htpp://localhost:8080/api/game/create',
            data: {
                gamename: gamename,
                status: 'private',
                players: playerIds
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
            return err.response;
        });

        return response.then(res => {
            return res;
        });
    }
}