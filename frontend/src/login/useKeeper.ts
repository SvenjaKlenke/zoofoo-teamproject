import {useState} from 'react';
import axios from "axios";

function UseKeeper() {

    const [user, setUser] = useState<string>()

    function login(username: string, password: string) {
        return axios.post("/keeper/login", undefined, {auth: {username, password}})
            .then((r) => setUser(r.data))
    }

    return {login, user}
}

export default UseKeeper;