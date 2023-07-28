import Input from 'components/common/Input/Input';
import './Login.css';
import Logo from 'components/common/Logo/Logo';
import useLogin from 'hooks/useLogin';
import { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onSubmit, isEmptyForm, errorMessage } = useLogin(
    {
      email,
      password,
    },
    handleLogin
  );

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <section className='login'>
      <div className='login__logo'>
        <Logo />
      </div>

      <h2 className='login__title'>Рады видеть!</h2>

      <form className='login__form' onSubmit={onSubmit}>
        <div className='login__input'>
          <Input
            text='Email'
            type='email'
            placeholder='Введите email'
            uniqId='email'
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className='login__input'>
          <Input
            text='Пароль'
            type='password'
            placeholder='Введите пароль'
            uniqId='password'
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className='login__actions'>
          {errorMessage.length > 0 && (
            <p className='login__error'>{errorMessage}</p>
          )}

          <button
            className='login__submit'
            type='submit'
            disabled={isEmptyForm}
          >
            Войти
          </button>

          <p className='login__info'>
            Ещё не зарегистрированы?{''}
            <a className='login__link' href='/signup'>
              Регистрация
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
