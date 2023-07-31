import { useState, useCallback } from 'react';

const useValidation = () => {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateName = useCallback((newName) => {
    if (newName.trim().length === 0) {
      setNameError('Поле Имя обязательно для заполнения');
      return;
    }

    if (newName.trim().length < 2 || newName.trim().length > 30) {
      setNameError('Имя должно содержать не менее 2 символов  и не более 30');
      return;
    }

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
    if (!nameRegex.test(newName)) {
      setNameError(
        'Имя должно содержать только латиницу, кириллицу, пробел или дефис'
      );
      return;
    }

    setNameError('');
  }, []);

  const validateEmail = useCallback((newEmail) => {
    if (newEmail.trim().length === 0) {
      setEmailError('Поле Email обязательно для заполнения');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError('Поле Email не соответствует шаблону почты');
      return;
    }

    setEmailError('');
  }, []);

  const validatePassword = useCallback((newPassword) => {
    if (newPassword.trim().length === 0) {
        setPasswordError('Поле Пароль обязательно для заполнения');
        return;
    }
    setPasswordError('');
  }, []);

  return {
    nameError,
    emailError,
    passwordError,
    validateName,
    validateEmail,
    validatePassword,
    hasAnyError: nameError.length > 0 || emailError.length > 0 || passwordError.length > 0,
  }
};

export default useValidation;
