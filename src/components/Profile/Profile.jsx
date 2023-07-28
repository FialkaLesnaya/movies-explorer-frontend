import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from 'components/common/Header/Header';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import useEditProfile from 'hooks/useEditProfile';

function Profile({handleUserDataChange, handeLogOut}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { onSubmit, isEmptyForm, errorMessage } = useEditProfile({
    name,
    email,
  }, handleUserDataChange);
  const hasSameValue = (name === currentUser.name && email === currentUser.email);

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
            </div>

            <div className='profile__actions'>
            {errorMessage.length > 0 && (
              <p className='profile__error'>
                {errorMessage}
              </p>
            )}

              <button className='profile__button' type='submit' disabled={isEmptyForm || hasSameValue}>
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
