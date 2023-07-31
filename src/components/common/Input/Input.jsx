import './Input.css';

function Input({ errorMessage = '', value = '', text='', type = 'text', minLength = null, maxLength = null, uniqId='input-name', placeholder = '', required = false, onChange }) {
  return (
    <div className={'input' + (errorMessage.length > 0 ? ' input--error' : '')}>
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

      {errorMessage.length > 0 && <p className='input__error'>{errorMessage}</p>}
    </div>
  );
}

export default Input;
