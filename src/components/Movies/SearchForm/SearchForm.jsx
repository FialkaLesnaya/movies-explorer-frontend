import FilterCheckbox from 'components/common/FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container'>
        <div className='search-form__icon'></div>

        <input className='search-form__input' placeholder='Фильмы'></input>

        <button className='search-form__button' type='submit'>Найти</button>
      </div>

      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
