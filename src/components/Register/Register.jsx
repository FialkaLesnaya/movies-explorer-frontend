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

  const inputs = [
    {
      id: 'name',
      text: 'Имя',
      type: 'text',
      placeholder: 'Введите имя',
      onChange: handleNameChange,
      errorMessage: nameError,
      value: name,
    },
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
    <section className='register'>
      <div className='register__logo'>
        <Logo />
      </div>

      <h2 className='register__title'>Добро пожаловать!</h2>

      <form className='register__form' onSubmit={onSubmit}>
        {inputs.map((e) => (
          <div className='register__input' key={e.id}>
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

        <div className='register__actions'>
          {errorMessage.length > 0 && (
            <p className='register__error'>{errorMessage}</p>
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
