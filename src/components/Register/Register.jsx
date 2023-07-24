import Input from 'components/common/Input/Input';
import './Register.css';
import Logo from 'components/common/Logo/Logo';

function Register() {
  return (
    <div className='register'>
      <Logo />

      <h2 className='register__title'>Добро пожаловать!</h2>

      <form className='register__form'>
        <div className='register__input'>
          <Input
            text='Имя'
            uniqId='name'
            placeholder='Введите имя'
            minLength={2}
            maxLength={30}
            required
          />
        </div>

        <div className='register__input'>
          <Input
            text='Email'
            type='email'
            uniqId='email'
            placeholder='Введите email'
            required
          />
        </div>

        <div className='register__input'>
          <Input
            text='Пароль'
            type='password'
            uniqId='password'
            placeholder='Введите пароль'
            isError
            required
          />
        </div>

        <button className='register__submit' type='submit'>
          Зарегистрироваться
        </button>

        <p className='register__info'>
          Уже зарегистрированы?{''}
          <a className='register__link' href='/signin'>
            Войти
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
