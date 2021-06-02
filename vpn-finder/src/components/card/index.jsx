import "./card.scss";

import cloud from "../../assets/img/cloud.png"

export const Card = ({ children, cardData }) => {

    return (

        <div className="card">
            <figure>
                <span>
                    <img src={cloud} alt="card Icon" />
                </span>
                <h2>{cardData.title}</h2>
                <p>{cardData.text}</p>
                {children}
            </figure>
        </div>
    )
}