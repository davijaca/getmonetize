import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const useHandleSubscriptionNewsletter = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    console.log(inputValue);

    if (isSending) {
      return;
    }

    if (inputValue) {
      setIsSending(true);

      //add to firebase
      await addDoc(collection(db, 'emails'), {
        email: inputValue,
        time: serverTimestamp(),
      });

      setIsSending(false);
      setInputValue('');
      setMessage('Thank you for signing up to our news');

      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return { handleInputChange, inputValue, submit, message };
};
