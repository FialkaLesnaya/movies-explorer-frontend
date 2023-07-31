import Input from 'components/common/Input/Input';
import './Login.css';
import Logo from 'components/common/Logo/Logo';
import useLogin from 'hooks/useLogin';
import { useState } from 'react';
import useValidation from 'hooks/useValidation';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
    hasAnyError,
  } = useValidation();
  const { isLoading, onSubmit, isEmptyForm, errorMessage } = useLogin(
    {
      email,
      password,
    },
    handleLogin
  );

  function handleEmailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  }

  const inputs = [
    {
      id: 'email',
      text: 'Email',
      type: 'email',
      placeholder: 'Введите email',
      onChange: handleEmailChange,
      errorMessage: emailError,
      value: email,
    },
    {
      id: 'password',
      text: 'Пароль',
      type: 'password',
      placeholder: 'Введите пароль',
      onChange: handlePasswordChange,
      errorMessage: passwordError,
      value: password,
    },
  ];

  return (
    <section className='login'>
      <div className='login__logo'>
        <Logo />
      </div>

      <h2 className='login__title'>Рады видеть!</h2>

      <form className='login__form' onSubmit={onSubmit}>
        {inputs.map((e) => (
          <div className='login__input' key={e.id}>
            <Input
              text={e.text}
              uniqId={e.id}
              type={e.type}
              placeholder={e.placeholder}
              required
              errorMessage={e.errorMessage}
              value={e.value}
              onChange={e.onChange}
            />
          </div>
        ))}

        <div className='login__actions'>
          {errorMessage.length > 0 && (
            <p className='login__error'>{errorMessage}</p>
          )}

          <button
            className='login__submit'
            type='submit'
            disabled={isEmptyForm || hasAnyError || isLoading}
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
