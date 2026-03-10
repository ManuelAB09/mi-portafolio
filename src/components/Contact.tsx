import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    setNameError(name.trim() === '');
    setEmailError(!isValidEmail);
    setMessageError(message.trim() === '');

    if (name.trim() !== '' && isValidEmail && message.trim() !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      ).then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Message sent successfully!");
        },
        (error: any) => {
          console.log('FAILED...', error);
          alert("Failed to send message. Please try again.");
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className='contact-form'
            sx={{
              '& .MuiInputBase-input': {
                color: '#0d1116 !important',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
              }
            }}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-input"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                inputProps={{ style: { color: '#0d1116', WebkitTextFillColor: '#0d1116' } }}
              />
              <TextField
                required
                id="email-input"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
                inputProps={{ style: { color: '#0d1116', WebkitTextFillColor: '#0d1116' } }}
              />
            </div>
            <TextField
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              inputProps={{ style: { color: '#0d1116', WebkitTextFillColor: '#0d1116' } }}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;