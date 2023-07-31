import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from 'components/common/Header/Header';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import useEditProfile from 'hooks/useEditProfile';
import useValidation from 'hooks/useValidation';

function Profile({ handleUserDataChange, handeLogOut }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {
    nameError,
    emailError,
    validateName,
    validateEmail,
    hasAnyError,
  } = useValidation();
  const { onSubmit, isEmptyForm, errorMessage } = useEditProfile(
    {
      name,
      email,
    },
    handleUserDataChange
  );
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const hasSameValue = name === currentUser.name && email === currentUser.email;

  function handleNameChange(e) {
    setName(e.target.value);
    validateName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }

  return (
    <>
      <Header />

      <main className='profile'>
        <section className='profile__container'>
          <h2 className='profile__title'>Привет, {currentUser.name}!</h2>

          <form className='profile__form' onSubmit={onSubmit}>
            <div className='profile__form-item'>
              <label htmlFor='profile-name' className='profile__label'>
                Имя
              </label>

              <input
                type='text'
                className='profile__input'
                id='profile-name'
                name='profile-name'
                placeholder='Введите имя'
                minLength={2}
                maxLength={30}
                value={name}
                onChange={handleNameChange}
              />

              {nameError.length > 0 && (<p className='profile__input-error'>{nameError}</p>)}
            </div>

            <div className='profile__form-item'>
              <label htmlFor='profile-email' className='profile__label'>
                E-mail
              </label>

              <input
                type='text'
                className='profile__input'
                id='profile-email'
                name='profile-email'
                placeholder='Введите email'
                value={email}
                onChange={handleEmailChange}
              />

              {emailError.length > 0 && (<p className='profile__input-error'>{emailError}</p>)}
            </div>

            <div className='profile__actions'>
              {errorMessage.length > 0 && (
                <p className='profile__error'>{errorMessage}</p>
              )}

              <button
                className='profile__button'
                type='submit'
                disabled={isEmptyForm || hasSameValue || hasAnyError}
              >
                Редактировать
              </button>

              <button
                className='profile__button profile__button--exit'
                type='button'
                onClick={handeLogOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
