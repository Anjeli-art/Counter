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
        padding: "10px",
        margin: "5px",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
    }
    const buttonInc = {
        backgroundColor: disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        padding: "10px",
        margin: "5px",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
    }
    const buttonSet = {
        backgroundColor: disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        padding: "10px",
        margin: "5px",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
    }

    return (
        <button disabled={disabled}
                onClick={callBack}
                style={title === "set" ? buttonSet : title === "reset" ? buttonRes : buttonInc}>{title}</button>
    )

}