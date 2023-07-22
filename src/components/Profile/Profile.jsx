import './Profile.css';
import Header from 'components/common/Header/Header';

function Profile() {
  return (
    <div className='profile'>
      <Header isMainPage={false} />

      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Фиалка!</h2>

        <form className='profile__form'>
          <div className='profile__form-item'>
            <label htmlFor='profile-name' className='profile__label'>
              Имя
            </label>

            <input
              type='text'
              className='profile__input'
              id='profile-name'
              name='profile-name'
              value='Фиалка'
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
              value='pochta@yandex.ru'
            />
          </div>

          <div className='profile__actions'>
            <button className='profile__button' type='submit'>
              Редактировать
            </button>

            <button
              className='profile__button profile__button--exit'
              type='button'
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
