import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalStorage } from 'services/localStorageService';
import { MainApi } from 'utils/MainApi';

const useRegister = (formData, handleLogin) => {
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
      .then(() => MainApi.login(formData.password, formData.email))
        .then((data) => {
          LocalStorage.setToken(data.token);
          handleLogin(true);
          setIsLoading(false);
          navigate('/movies', { replace: true });
        })
        .catch((errorMessage) => {
          setErrorMessage(errorMessage);
          setIsLoading(false);
        });
    },
    [formData, isEmptyForm, navigate, handleLogin]
  );

  return {
    onSubmit,
    isEmptyForm,
    errorMessage,
    isLoading,
  };
};

export default useRegister;
