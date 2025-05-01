import React from "react";
import contactimg from "../assets/img/8102780.png"

const Contacts = (name,adress,phone,email) => {
    return(
        <div className="container">
            <div>
                <img src={contactimg} alt="Foto de perfil" />
            </div>
            <div>
                <h3>{name}</h3>
                <address>{adress}</address>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
            <div>
                <button>✏️</button>
                <button>🗑️</button>
            </div>

        </div>
    )
}

export default Contacts