// ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const customStyle = {
    errorContainer: {
        textAlign: 'center',
        padding: '20px',
        margin: '50px auto',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        color: '#ff0000',
        marginBottom: '1.5rem'
    },
    btn: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

const ErrorPage = () => {
    return (
        <div style={customStyle.errorContainer}>
            <h1 style={customStyle.heading}>Oops! Something went wrong...</h1>
            <Link to="/" style={customStyle.btn}>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;
