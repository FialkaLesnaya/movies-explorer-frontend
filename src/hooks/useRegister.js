import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainApi } from 'utils/MainApi';

const useRegister = (formData) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);

      MainApi.register(formData.name, formData.password, formData.email)
        .then(() => {
          setIsLoading(false);
          navigate('/signin', { replace: true });
        })
        .catch((errorMessage) => {
          setErrorMessage(errorMessage);
          setIsLoading(false);
        });
    },
    [formData, isEmptyForm, navigate]
  );

  return {
    onSubmit,
    isEmptyForm,
    errorMessage,
    isLoading,
  };
};

export default useRegister;
