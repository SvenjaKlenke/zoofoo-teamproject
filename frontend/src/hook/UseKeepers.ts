import axios from "axios";
import {useState} from "react";
import {Keeper} from "../model/KeeperModel";


export default function UseKeepers() {

    const [keeper, setKeeper] = useState<Keeper[]>([])

    console.log(keeper)

    function getAllKeepers() {
             axios.get("/keeper")
                .then((response) => {
                    setKeeper(response.data)
                })
        }
        return {getAllKeepers, keeper};
}