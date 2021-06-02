import "./input.scss";

export const Input = ({ placeholder, bgColor, children, inputContext }) => {

    return (
        <div className="input" style={{ backgroundColor: bgColor }} inputContext={inputContext}>
            <input placeholder={placeholder}  />
            {children}
        </div>

    )
}