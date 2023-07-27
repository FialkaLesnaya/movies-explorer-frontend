import FilterCheckbox from 'components/common/FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useCallback, useState } from 'react';

function SearchForm({ handleSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setSearchValue(value);
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleSearch(isChecked, searchValue);
    },
    [handleSearch, isChecked, searchValue]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onSubmit(event);
      }
    },
    [onSubmit]
  );

  const onCheckboxChange = useCallback(() => {
    setIsChecked(!isChecked);

    if (searchValue.length > 0) {
      handleSearch(!isChecked, searchValue);
    }
  }, [isChecked, searchValue, handleSearch]);

  return (
    <form className='search-form' onSubmit={onSubmit}>
      <div className='search-form__container'>
        <div className='search-form__icon'></div>

        <input
          className='search-form__input'
          onChange={onChange}
          value={searchValue}
          onKeyDown={onKeyDown}
          placeholder='Фильмы'
        ></input>

        <button className='search-form__button' type='submit'>
          Найти
        </button>
      </div>

      <FilterCheckbox isChecked={isChecked} handleChange={onCheckboxChange} />
    </form>
  );
}

export default SearchForm;
