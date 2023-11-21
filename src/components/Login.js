// src/components/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h2`
  color: #4caf50;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement actual login logic (connect to backend)
    console.log('Login:', { email, password });
  };

  return (
    <LoginContainer>
      <Title>Welcome back!</Title>
      <Form>
        <Label>Email:</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>Password:</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
