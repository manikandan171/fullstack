import { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    });
    const [message, setMessage] = useState('');
    const [allData, setAllData] = useState([]);

    // Fetch all form data from backend
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getform');
            setAllData(response.data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/postform', formData);
            setMessage('Form submitted successfully!');
            setFormData({ name: '', email: '', password: '', department: '' });
            fetchData(); // Refresh the list after submit
        } catch (error) {
            setMessage('Submission failed!');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} /><br />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} /><br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />
                <label>Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} /><br />
                <button type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}

            <h2>Submitted Data</h2>
            <ul>
                {allData.map((item) => (
                    <li key={item._id}>
                        Name: {item.name}, Email: {item.email}, Password: {item.password}, Department: {item.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Form;