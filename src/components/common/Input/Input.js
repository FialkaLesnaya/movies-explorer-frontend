import './Input.css';

function Input() {
  return (
    <div className='input input--error'>
      <label htmlFor='input-name' className='input__label'>Login</label>

      <input type='text' className='input__element' id="input-name" name='input-name' />

      <p className='input__error'>
        Что-то пошло не так...
      </p>
    </div>
  );
}

export default Input;
