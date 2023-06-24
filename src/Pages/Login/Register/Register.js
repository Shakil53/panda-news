import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProdiver';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const naviGate = useNavigate()

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name?.value;
        const photoURl = form.photoURL?.value;
        const email = form.email?.value;
        const password = form.password?.value;
        console.log(name, photoURl, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                naviGate('/login')
            })
            .catch(error => console.log(error))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="name" placeholder="Enter your name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Enter your photo url" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name='email' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Enter your password" required />
            </Form.Group>


            <Button className='me-3' variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className='text-danger'>
                We'll never share your email with anyone else.
            </Form.Text>
        </Form>
    );
};

export default Register;