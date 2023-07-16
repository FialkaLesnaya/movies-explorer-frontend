import './Input.css';

function Input({ isError = false, type = 'text', uniqId='input-name' }) {
  return (
    <div className={'input' + (isError ? ' input--error' : '')}>
      <label htmlFor={uniqId} className='input__label'>
        Login
      </label>

      <input
        type={type}
        className='input__element'
        id={uniqId}
        name={uniqId}
      />

      {isError && <p className='input__error'>Что-то пошло не так...</p>}
    </div>
  );
}

export default Input;
