import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
    const { dispatch } = useContactContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const emailAdress = document.getElementById("emailAdress").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const adress = document.getElementById("adress").value;

        const newContact = {
            full_name: fullName,
            email: emailAdress,
            phone: phoneNumber,
            address: adress,
            agenda_slug: "Elias"
        };

        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newContact)
            });

            if (!response.ok) throw new Error("Failed to add contact");

            dispatch({ type: "ADD_CONTACT", payload: newContact });
            document.querySelector("form").reset();
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };
    return (
        <form>
            <div className="m-2">
                <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
            </div>

            <div className="m-2">
                <input type="email" className="form-control" id="emailAdress" placeholder="Email Address" />
            </div>

            <div className="m-2">
                <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number" />
            </div>

            <div className="m-2">
                <input type="text" className="form-control" id="adress" placeholder="Address" />
            </div>

            <div className="d-flex justify-content-between m-2">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <Link to="/">
                    <button type="button" className="btn btn-primary">Volver a contactos</button>
                </Link>
            </div>
        </form>
    );
};

export default AddContact;
