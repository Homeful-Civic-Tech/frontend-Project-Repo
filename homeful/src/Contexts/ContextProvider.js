import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verified, setVerification] = useState(0)

  const state = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    verified,
    setVerification
  };

  return (
    <Context.Provider value={ state }> 
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;