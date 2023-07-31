import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button } from '@mui/material';

const AddMissionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your Firebase code here to store the form data
        console.log(formData);
        // Reset the form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default AddMissionForm;
