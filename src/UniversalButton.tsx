import React from "react";

export type UniversalButonType = {
    disabled: boolean
    title: string
    callBack: () => void
}


export const UniversalButton:React.FC<UniversalButonType>=({disabled,title,callBack,...props})=> {

    const buttonRes = {
        backgroundColor: disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        margin: "5px 0 5px 15px",
        display:"block",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
        padding: "10px"
    }
    const buttonInc = {
        backgroundColor: disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        margin: "5px 0",
        display:"block",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
        padding: "10px"
    }
    const buttonSet = {
        backgroundColor: disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        margin: "5px auto",
        display:"block",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
        padding: "10px"

    }

    return (
        <button disabled={disabled}
                onClick={callBack}
                style={title === "set" ? buttonSet : title === "reset" ? buttonRes : buttonInc}>{title}</button>
    )

}