import { useCallback, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({handleSearch}) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = useCallback(
    () => {
      setIsChecked(!isChecked);
      handleSearch(!isChecked);
    },
    [isChecked, handleSearch]
  );

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
