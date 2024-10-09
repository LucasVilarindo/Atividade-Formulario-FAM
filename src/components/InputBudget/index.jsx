import "./style.css";

export default function InputBudget({
    id,
    placeholder,
    children,
    observation,
    register,
    errors,
}) {
    return (
        <div className="input-form">
            <div>
                <label htmlFor={id}>
                    {children}
                    {errors && <span>*</span>}
                </label>
            </div>

            <input
                className={observation ? "input-observation" : ""}
                type="text"
                id={id}
                {...register}
                placeholder={placeholder}
            />
        </div>
    );
}
