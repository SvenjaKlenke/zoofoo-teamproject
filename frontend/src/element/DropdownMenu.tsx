import React from 'react';
import UseKeepers from "../hook/UseKeepers";
function DropdownMenu() {


    const {getAllKeepers,keeper}= UseKeepers()


    return (
        <select className="button" onFocus={getAllKeepers}>
            <option defaultValue="keeper">select Keeper</option>
            {keeper.map(keepers => (
                <option key={keepers.id} >
                    {keepers.username}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;