import React, { useState } from "react";

const DisplayName = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        setFullName(`${firstName} ${lastName}`);
    };

    return (
        <>
            <h1 style={{fontFamily: "auto"}}>Full Name Display</h1>
            <form onSubmit={handleSubmit} style={{fontFamily: "auto"}}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {fullName && <p>Full Name: {fullName}</p>}
        </>
    );
};

export default DisplayName;