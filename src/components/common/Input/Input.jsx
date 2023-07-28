import './Input.css';

function Input({ isError = false, value = '', text='', type = 'text', minLength = null, maxLength = null, uniqId='input-name', placeholder = '', required = false, onChange }) {
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
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />

      {isError && <p className='input__error'>Что-то пошло не так...</p>}
    </div>
  );
}

export default Input;
