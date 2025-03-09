import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                />
            </div>

            <div>
                <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                />
            </div>

            <div>
                <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                />
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;