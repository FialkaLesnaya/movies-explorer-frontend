import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainApi } from 'utils/MainApi';

const useRegister = (formData) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const isEmptyForm =
    formData.name === '' || formData.email === '' || formData.password === '';

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (isEmptyForm) {
        return;
      }

      setErrorMessage('');

      MainApi.register(formData.name, formData.password, formData.email)
        .then(() => {
          navigate('/signin', { replace: true });
        })
        .catch((errorMessage) => {
          setErrorMessage(errorMessage);
        });
    },
    [formData, isEmptyForm, navigate]
  );

  return {
    onSubmit,
    isEmptyForm,
    errorMessage,
  };
};

export default useRegister;
