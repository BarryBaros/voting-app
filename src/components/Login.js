import React, {useState} from "react";

function Login({ onLogin }) {
    const [idNumber, setidNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(); //perfom login here
    };

    return (
        
    )
}