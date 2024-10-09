import React, { useState } from "react";
import CardSelectService from "../CardSelectServices";
import "./style.css";

const ListButtonsBudget = ({ selectedButton, setSelectedButton, loading }) => {
    const handleClick = (index) => {
        setSelectedButton(index);
    };

    const dataCardServices = [
        "Funilaria",
        "Pintura",
        "Higienização",
        "Polimento",
        "Cristalização",
        "Revitalização",
        "Outros",
    ];

    return (
        <div className="sectionselectService">
            <div className="label-select-service">
                <p>Selecione o Serviço</p>
                {loading & (selectedButton === null) ? <span>*</span> : ""}
            </div>
            <div className="card-selectServices">
                {dataCardServices.map((services, index) => (
                    <CardSelectService
                        key={index}
                        dados={services}
                        className={
                            selectedButton === index
                                ? "button-service-selected"
                                : ""
                        }
                        handleClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListButtonsBudget;
