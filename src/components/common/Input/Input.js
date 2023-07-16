import './Input.css';

function Input({ isError = false, type = 'text' }) {
  return (
    <div className={'input' + (isError ? ' input--error' : '')}>
      <label htmlFor='input-name' className='input__label'>
        Login
      </label>

      <input
        type={type}
        className='input__element'
        id='input-name'
        name='input-name'
      />

      {isError && <p className='input__error'>Что-то пошло не так...</p>}
    </div>
  );
}

export default Input;
