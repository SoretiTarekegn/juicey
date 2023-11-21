// src/components/Signup.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h2`
  color: #4caf50;
  text-align: center;
  margin-bottom: 20px;
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
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  color: #555;
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

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSignup = () => {
    // Implement actual signup logic (connect to backend)
    console.log('Signup:', { fullName, phone, email, password, rememberMe, termsChecked });
  };

  return (
    <SignupContainer>
      <Title>Create an account</Title>
      <Form>
        <Label>Full Name:</Label>
        <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <Label>Phone Number:</Label>
        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <Label>Email:</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>Password:</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <CheckboxContainer>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <CheckboxLabel>Remember me</CheckboxLabel>
        </CheckboxContainer>

        <CheckboxContainer>
          <input type="checkbox" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} />
          <CheckboxLabel>I agree to the Terms and Privacy Policy</CheckboxLabel>
        </CheckboxContainer>

        <Button type="button" onClick={handleSignup}>
          Signup
        </Button>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
