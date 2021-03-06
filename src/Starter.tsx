import React, {ChangeEvent} from 'react';
import {UniversalButton} from "./UniversalButton";

export type StarterType = {
    buttonDis: boolean
    inputValueMax: number
    inputValueMin: number
    onSet: () => void
    onChangeValueMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeValueMin: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Starter: React.FC<StarterType> = ({buttonDis, inputValueMax, inputValueMin, onSet, ...props}) => {

    const disSet = inputValueMax < 0 || inputValueMin < 0 || inputValueMax === inputValueMin || inputValueMin > inputValueMax || buttonDis ? true : false
    const conditions = inputValueMax === inputValueMin || inputValueMin > inputValueMax
    const borderMin = conditions || inputValueMin < 0
    const borderMax = conditions || inputValueMax < 0

    const counter = {
        minHeight:"300px",
        padding:"20px",
        backgroundColor: "#282c34",
        marginRight:"100px",
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        width: "390px",
    }
    const inputblock = {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        marginBottom: "10px",
        padding:"15px 5px 15px 5px",
        color: "#c2fdf4",
    }
    const buttonBlock= {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        padding: "10px"
    }
    const label = {
        fontWeight: 800,
        fontSize: "150%",
    }
    const inputMin = {
        borderRadius: "10px",
        padding: "8px",
        outline: "0",
        border: borderMin ? "4px solid #7f0703" : "4px solid #c2fdf4",
        backgroundColor: borderMin ? "#fca3a3" : "#f0fdf9"
    }
    const inputMax = {
        borderRadius: "10px",
        padding: "8px",
        outline: "0",
        border: borderMax ? "4px solid #7f0703" : "4px solid #c2fdf4",
        backgroundColor: borderMax ? "#fca3a3" : "#f0fdf9"
    }


    return (
        <div style={counter} className={"counter"}>
            <div style={inputblock}>
                <label style={label}>max value:</label>
                <input type="number" value={inputValueMax} onChange={props.onChangeValueMax} style={inputMax}/>
                <br/>
                <br/>
                <label style={label}>min value:</label>
                <input type="number" value={inputValueMin} onChange={props.onChangeValueMin} style={inputMin}/>
            </div>
            <div style={buttonBlock}>
                <UniversalButton title={"set"} callBack={onSet} disabled={disSet}/>
            </div>
        </div>

    );
}
