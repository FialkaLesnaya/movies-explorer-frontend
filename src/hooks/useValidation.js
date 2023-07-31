import { useState, useCallback } from 'react';

const useValidation = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateName = useCallback((newName) => {
    if (newName.trim().length === 0) {
      setErrorMessage('Поле Имя обязательно для заполнения');
      return false;
    }

    if (newName.trim().length < 2 || newName.trim().length > 30) {
      setErrorMessage(
        'Имя должно содержать не менее 2 символов  и не более 30'
      );
      return false;
    }

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
    if (!nameRegex.test(newName)) {
      setErrorMessage(
        'Имя должно содержать только латиницу, кириллицу, пробел или дефис'
      );
      return false;
    }

    setErrorMessage('');
    return true;
  }, []);

  const validateEmail = useCallback((newEmail) => {
    if (newEmail.trim().length === 0) {
      setErrorMessage('Поле Email обязательно для заполнения');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setErrorMessage('Поле Email не соответствует шаблону почты');
      return false;
    }

    setErrorMessage('');
    return true;
  }, []);

  const validateForm = useCallback((newName, newEmail) => {
    if (!validateName(newName)) {
      return false;
    }

    if (!validateEmail(newEmail)) {
      return false;
    }

    return true;
  }, [validateName, validateEmail]);

  const validateResponse = useCallback((newMessage) => {
    setErrorMessage(newMessage);
  }, []);

  const resetErrors = useCallback(() => {
    setErrorMessage('');
  }, []);

  return {
    errorMessage,
    validateName,
    validateEmail,
    validateResponse,
    resetErrors,
    validateForm,
  };
};

export default useValidation;
