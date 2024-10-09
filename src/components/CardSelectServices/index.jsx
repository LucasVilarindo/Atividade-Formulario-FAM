import React from "react";
import "./style.css";

export default function CardSelectService({ dados, handleClick, className }) {
    return (
        <div className={`Card-services ${className}`} onClick={handleClick}>
            <p>{dados}</p>
        </div>
    );
}
