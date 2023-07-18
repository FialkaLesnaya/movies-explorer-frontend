import Input from 'components/common/Input/Input';
import './Login.css';
import Logo from 'components/common/Logo/Logo';

function Login() {
  return (
    <div className='login'>
      <Logo />

      <h2 className='login__title'>Рады видеть!</h2>

      <form className='login__form'>
        <div className='login__input'>
          <Input text='Email' type='email' uniqId='email' />
        </div>

        <div className='login__input'>
          <Input text='Пароль' type='password' uniqId='password' />
        </div>

        <button className='login__submit' type='submit'>
          Войти
        </button>

        <p className='login__info'>
          Ещё не зарегистрированы?{''}
          <a className='login__link' href='/signup'>
            Регистрация
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
