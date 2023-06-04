import axios from "axios";
import {useEffect, useState} from "react";
import {Keeper} from "../model/KeeperModel";

export default function ChangeKeepers() {

    const [keeper, setKeeper] = useState<Keeper[]>([])

    useEffect(getAllKeepers, [])

    function getAllKeepers() {
        axios.get("/api/keeper")
            .then((response) => {
                setKeeper(response.data)
            })
    }

    return {getAllKeepers, keeper};
}