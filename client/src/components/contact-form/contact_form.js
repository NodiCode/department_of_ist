import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./contact_form.css"

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Clear form fields after submitting
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <Form className="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="name_form" controlId="formName">
                    <Form.Label >Name</Form.Label>
                    <Form.Control
                        className="input"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="email_form" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        className="input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="message_form" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        className="inputmsg"
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>

                <Button className="btn_form" variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>

    );
}

export default ContactForm