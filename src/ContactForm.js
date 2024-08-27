// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/.netlify/functions/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const responseData = await response.json();
            alert(responseData.message);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. ' + error.message);
        }
    };

    return (
        <form 
    onSubmit={handleSubmit} 
    style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px', 
        maxWidth: '100%', 
        width: '100%', 
        margin: '0 auto', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
        backgroundColor: '#f9f9f9',
        boxSizing: 'border-box',
    }}>
    <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{
            padding: '12px 15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            lineHeight: '1.5',
            width: '100%',
            boxSizing: 'border-box',
        }}
    />
    <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{
            padding: '12px 15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            lineHeight: '1.5',
            width: '100%',
            boxSizing: 'border-box',
        }}
    />
    <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        style={{
            padding: '12px 15px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            lineHeight: '1.5',
            width: '100%',
            boxSizing: 'border-box',
            resize: 'none',
        }}
    />
    <button 
        type="submit" 
        style={{
            padding: '12px 15px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            width: '100%',
            boxSizing: 'border-box',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
    >
        Send
    </button>
</form>

    );
}

export default ContactForm;
