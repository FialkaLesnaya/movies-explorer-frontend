import { useState, useCallback } from 'react';
import { MainApi } from 'utils/MainApi';

const useEditProfile = (formData, handleUserDataChange) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isEmptyForm = formData.name === '' || formData.email === '';

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (isEmptyForm) {
        return;
      }

      setErrorMessage('');
      setIsLoading(true);

      MainApi.editProfile(formData.name, formData.email)
        .then(() => {
          setIsLoading(false);
          handleUserDataChange(formData);
        })
        .catch((errorMessage) => {
          setIsLoading(false);
          setErrorMessage(errorMessage);
        });
    },
    [formData, isEmptyForm, handleUserDataChange]
  );

  return { isLoading, onSubmit, isEmptyForm, errorMessage };
};

export default useEditProfile;
