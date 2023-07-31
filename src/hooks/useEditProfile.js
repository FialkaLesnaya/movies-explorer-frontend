import { useState, useCallback, useEffect } from 'react';
import { MainApi } from 'utils/MainApi';
import useValidation from './useValidation';

const useEditProfile = (currentUser, handleUserDataChange) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { errorMessage, validateForm, validateResponse, resetErrors } =
    useValidation();

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    validateForm(name, email);
  }, [name, email, validateForm]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      resetErrors();

      MainApi.editProfile(name, email)
        .then(() => {
          handleUserDataChange({ name: name.trim(), email });
        })
        .catch((errorMessage) => {
          validateResponse(errorMessage);
        });
    },
    [name, email, handleUserDataChange, resetErrors, validateResponse]
  );

  return {
    name,
    email,
    onSubmit,
    errorMessage,
    formDisabled:
      (name === currentUser.name && email === currentUser.email) ||
      errorMessage.length > 0,
    handleNameChange,
    handleEmailChange,
  };
};

export default useEditProfile;
