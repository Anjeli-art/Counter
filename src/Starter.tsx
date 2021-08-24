import React, {ChangeEvent} from 'react';
import {UniversalButton} from "./UniversalButton";

export type StarterType = {
    dataMax: number
    dataMin: number
    buttonDis: boolean
    inputValueMax: number
    inputValueMin: number
    onSet: () => void
    onChangeValueMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeValueMin: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Starter(props: StarterType) {

    let disSet = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.buttonDis ? true : false
    let bordermin = props.dataMax === props.dataMin || props.dataMin < 0 || props.dataMin > props.dataMax
    let bordermax = props.dataMax === props.dataMin || props.dataMax < 0

    const counter1 = {
        width: "350px",
        backgroundColor: "#282c34",
        padding: "20px",
        margin: "100px 150px 350px 250px",
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
    }
    const inputblock = {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        padding: "10px",
        marginBottom: "10px",
        color: "#c2fdf4",
    }
    const buttonBlock1 = {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        padding: "10px 0px 10px 120px",
    }
    const label = {
        fontWeight: 800,
        fontSize: "150%",
    }
    const inputMin = {
        borderRadius: "10px",
        padding: "8px",
        outline: "0",
        border: bordermin ? "4px solid #7f0703" : "4px solid #c2fdf4",
        backgroundColor: bordermin ? "#fca3a3" : "#f0fdf9"
    }
    const inputMax = {
        borderRadius: "10px",
        padding: "8px",
        outline: "0",
        border: bordermax ? "4px solid #7f0703" : "4px solid #c2fdf4",
        backgroundColor: bordermax ? "#fca3a3" : "#f0fdf9"
    }


    return (
        <div style={counter1}>
            <div style={inputblock}>
                <label style={label}>max value:</label>
                <input type="number" value={props.inputValueMax} onChange={props.onChangeValueMax} style={inputMax}/>
                <br/>
                <br/>
                <label style={label}>min value:</label>
                <input type="number" value={props.inputValueMin} onChange={props.onChangeValueMin} style={inputMin}/>
            </div>
            <div style={buttonBlock1}>
                <UniversalButton title={"set"} Callback={props.onSet} disabled={disSet}/>
            </div>
        </div>

    );
}
