import React, {useState} from 'react';
import "./Modal.css"

type Props={
    closeModal:(close: boolean)=>void;
    weekdays: string[];
}
function Modal(props: Props) {

    return (
        <div className={"modalBackground"}>
            <div className={"modalContainer"}>
                <div className={"titleCloseBtn"}>
                    <button onClick={()=>props.closeModal(false)}>x</button>
                </div>
                <div className={"title"}>
                    <h4>Add a new animal to the zoo.</h4>
                </div>
                <div className={"body"}>
                        <label>Species</label>
                        <form><input type="species" placeholder={"What's the name?"}/></form>
                        <label>Food</label>
                        <form><input type="food" placeholder={"What kind of food?"}/></form>
                        <label>Food Amount</label>
                        <form><input type="foodAmount" placeholder={"How much in kg?"}/></form>
                        <label>Feeding Day</label>
                        <select>{props.weekdays.map((day)=><option key={day} value={day}>{day}</option>)}</select>
                        <label>No. of Animals</label>
                        <form><input type="numberOfAnimals" placeholder={"How much animals?"}/></form>
                        <label>URL of picture</label>
                        <form><input type="pictureOfAnimal" placeholder={"Where is the picture?"}/></form>
                </div>
                <div className={"footer"}>
                    <button onClick={()=>props.closeModal(false)} id={"cancelBtn"}>Cancel</button>
                    <button>Add</button>
                </div>

            </div>
        </div>

    );
}

export default Modal;