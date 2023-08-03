import { useCallback } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, handleChange }) {
  const onChange = useCallback(() => handleChange(), [handleChange]);

  return (
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__input'
        checked={isChecked}
        type='checkbox'
        onChange={onChange}
      />
      <span className='filter-checkbox__switcher'></span>

      <span className='filter-checkbox__text'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
