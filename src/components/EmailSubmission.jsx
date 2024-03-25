import React, { useState } from 'react';
import { database } from '../firebase';
import { push, ref } from 'firebase/database';

const EmailSubmission = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Push email to the 'emails' node in the database
      await push(ref(database, 'emails'), {email, name});
      alert('Email submitted successfully!');
      setEmail('');
      setName(''); // Clear input after submission
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
      <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default EmailSubmission;