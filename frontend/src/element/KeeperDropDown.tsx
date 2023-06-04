import React from 'react';
import {Keeper} from "../model/KeeperModel";

type Props = {
    keeper: Keeper[]
}

function DropdownMenu(props: Props) {
    return (
        <select className="button">
            {props.keeper.map(keepers => (
                <option key={keepers.id}>
                    {keepers.name}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;