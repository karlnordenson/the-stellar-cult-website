import React, { useState } from 'react';
import { database } from '../firebase';
import { push, ref } from 'firebase/database';
import styles from "./EmailSubmission.module.css"

const EmailSubmission = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Push email to the 'emails' node in the database
      await push(ref(database, 'emails'), {email, name});
      alert('You have joined The Stellar Cult');
      setEmail('');
      setName(''); // Clear input after submission
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.emailItems}>

      <form onSubmit={handleSubmit}>
      <h2 className={styles.joinCult}>JOIN THE CULT</h2>
        <div className={styles.inputs}>
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
          <button type="submit">JOIN</button>
        </div>
      </form>
    </div>
  );
};

export default EmailSubmission;