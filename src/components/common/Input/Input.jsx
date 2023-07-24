import './Input.css';

function Input({ isError = false, text='', type = 'text', minLength = null, maxLength = null, uniqId='input-name', placeholder = '', required = false }) {
  return (
    <div className={'input' + (isError ? ' input--error' : '')}>
      <label htmlFor={uniqId} className='input__label'>
        {text}
      </label>

      <input
        type={type}
        className='input__element'
        id={uniqId}
        minLength={minLength}
        maxLength={maxLength}
        name={uniqId}
        placeholder={placeholder}
        required={required}
      />

      {isError && <p className='input__error'>Что-то пошло не так...</p>}
    </div>
  );
}

export default Input;
