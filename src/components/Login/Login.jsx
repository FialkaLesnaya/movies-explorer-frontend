import Input from 'components/common/Input/Input';
import './Login.css';
import Logo from 'components/common/Logo/Logo';

function Login() {
  return (
    <section className='login'>
      <div className='login__logo'>
        <Logo />
      </div>

      <h2 className='login__title'>Рады видеть!</h2>

      <form className='login__form'>
        <div className='login__input'>
          <Input
            text='Email'
            type='email'
            placeholder='Введите email'
            uniqId='email'
            required
          />
        </div>

        <div className='login__input'>
          <Input
            text='Пароль'
            type='password'
            placeholder='Введите пароль'
            uniqId='password'
            required
          />
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
    </section>
  );
}

export default Login;
