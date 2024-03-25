import React, { useState } from 'react';

export function SignupForm({ sign }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    sign(formData);
  };

  return (
    <form onSubmit={submit}>
      <label>
        First Name:
        <input type="text" name="firstName" placeholder='first name' value={formData.firstName} onChange={change} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" placeholder='last name' value={formData.lastName} onChange={change} />
      </label>
      <label>
        Email:
        <input type="email" name="email" placeholder='email' value={formData.email} onChange={change} />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder='password' value={formData.password} onChange={change} />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" placeholder='confirm password' value={formData.confirmPassword} onChange={change} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}






