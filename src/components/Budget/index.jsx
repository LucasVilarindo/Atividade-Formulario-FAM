import React, { useState } from "react";
import "./style.css";
import InputBudget from "../InputBudget";

import ListButtonsBudget from "../ListButtonsBudget";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
export default function Budget() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedButton, setSelectedButton] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const toastId = toast.loading("Enviando formulario...");
        if (selectedButton !== null) {
            console.log(data);

            toast.dismiss(toastId);
            toast.success("Formulario enviado com sucesso!");
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            toast.dismiss(toastId);
            toast.error("Selecione o tipo de serviço!");
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    return (
        <div className="Budget">
            <section className="section-title-budget">
                <h3>
                    Preencha o <span>formulário</span> para receber um{" "}
                    <span>orçamento</span> personalizado!
                </h3>
                <h2>
                    Solicite um <span>orçamento</span>.
                </h2>
            </section>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputBudget
                    id="name"
                    placeholder="Nome"
                    register={register("name", { required: true })}
                    errors={errors?.name}
                >
                    Digite seu nome completo
                </InputBudget>

                <InputBudget
                    id="telephone"
                    placeholder="Telefone"
                    register={register("telephone", { required: true })}
                    errors={errors?.telephone}
                >
                    Digite seu número de telefone
                </InputBudget>

                <ListButtonsBudget
                    setSelectedButton={setSelectedButton}
                    selectedButton={selectedButton}
                    loading={loading}
                />

                <InputBudget
                    id="car"
                    placeholder="Modelo do carro"
                    register={register("car", { required: true })}
                    errors={errors?.car}
                >
                    Qual o modelo de carro?
                </InputBudget>

                <InputBudget
                    id="observations"
                    placeholder="Digite sua mensagem"
                    register={register("observations")}
                    observation={true}
                >
                    Observações gerais
                </InputBudget>

                <button
                    type="submit"
                    disabled={loading}
                    className={`button-form ${
                        loading ? "button-form-disable" : ""
                    }`}
                >
                    Solicitar
                </button>
            </form>
        </div>
    );
}
