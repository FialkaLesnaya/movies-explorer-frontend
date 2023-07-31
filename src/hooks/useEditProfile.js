import { useState, useCallback } from 'react';
import { MainApi } from 'utils/MainApi';

const useEditProfile = (formData, handleUserDataChange) => {
  const [errorMessage, setErrorMessage] = useState('');

  const isEmptyForm = formData.name === '' || formData.email === '';

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (isEmptyForm) {
        return;
      }

      setErrorMessage('');

      MainApi.editProfile(formData.name, formData.email)
        .then(() => {
          handleUserDataChange(formData);
        })
        .catch((errorMessage) => {
          setErrorMessage(errorMessage);
        });
    },
    [formData, isEmptyForm, handleUserDataChange]
  );

  return { onSubmit, isEmptyForm, errorMessage };
};

export default useEditProfile;
