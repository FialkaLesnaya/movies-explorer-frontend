import Input from 'components/common/Input/Input';
import './Register.css';
import Logo from 'components/common/Logo/Logo';
import { useState } from 'react';
import useRegister from 'hooks/useRegister';
import useValidation from 'hooks/useValidation';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    nameError,
    emailError,
    passwordError,
    validateName,
    validateEmail,
    validatePassword,
    hasAnyError,
  } = useValidation();

  const { onSubmit, isEmptyForm, errorMessage } = useRegister({
    name,
    email,
    password,
  });

  function handleNameChange(e) {
    setName(e.target.value);
    validateName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  }

  return (
    <section className='register'>
      <div className='register__logo'>
        <Logo />
      </div>

      <h2 className='register__title'>Добро пожаловать!</h2>

      <form className='register__form' onSubmit={onSubmit}>
        <div className='register__input'>
          <Input
            text='Имя'
            uniqId='name'
            placeholder='Введите имя'
            minLength={2}
            maxLength={30}
            required
            errorMessage={nameError}
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className='register__input'>
          <Input
            text='Email'
            type='email'
            uniqId='email'
            placeholder='Введите email'
            required
            errorMessage={emailError}
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className='register__input'>
          <Input
            text='Пароль'
            type='password'
            uniqId='password'
            placeholder='Введите пароль'
            required
            errorMessage={passwordError}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className='register__actions'>
          {errorMessage.length > 0 && (
            <p className='register__error'>
              {errorMessage}
            </p>
          )}

          <button
            className='register__submit'
            type='submit'
            disabled={isEmptyForm || hasAnyError}
          >
            Зарегистрироваться
          </button>

          <p className='register__info'>
            Уже зарегистрированы?{''}
            <a className='register__link' href='/signin'>
              Войти
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
