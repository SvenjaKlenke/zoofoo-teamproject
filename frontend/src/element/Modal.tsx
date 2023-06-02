import React from 'react';
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
                <form>
                    <div className={"body"}>
                        <label>Species</label>
                        <input type="species" placeholder={"What's the name?"}/>
                        <label>Food</label>
                        <input type="food" placeholder={"What kind of food?"}/>
                        <label>Food Amount</label>
                        <input type="foodAmount" placeholder={"How much in kg?"}/>
                        <label>Feeding Day</label>
                        <select>{props.weekdays.map((day)=><option key={day} value={day}>{day}</option>)}</select>
                        <label>No. of Animals</label>
                        <input type="numberOfAnimals" placeholder={"How many animals?"}/>
                        <label>URL of picture</label>
                        <input type="pictureOfAnimal" placeholder={"Where is the picture?"}/>
                    </div>
                    <div className={"footer"}>
                        <button onClick={()=>props.closeModal(false)} id={"cancelBtn"}>Cancel</button>
                        <button>Add</button>
                    </div>
                </form>

            </div>
        </div>

    );
}

export default Modal;