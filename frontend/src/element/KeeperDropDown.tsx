import React from 'react';
import {Keeper} from "../model/KeeperModel";
import useKeepers from "../hook/useKeepers"

type Props = {
    keeper: Keeper[]
}

function DropdownMenu(props: Props) {
    const {getAllKeepers, keeper} = useKeepers()

    return (
        <select className="button">
            {props.keeper.map(keepers => (
                <option key={keepers.id}>
                    {keepers.username}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;