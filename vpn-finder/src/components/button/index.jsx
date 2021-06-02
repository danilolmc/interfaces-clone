import "./button.scss";

export const Button = ({ children, bgColor , typeButton}) => {

    return <button typeButton={typeButton} style={{backgroundColor : bgColor}}>{children}</button>
}