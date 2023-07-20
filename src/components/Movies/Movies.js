import Footer from 'components/common/Footer/Footer';
import './Movies.css';
import Header from 'components/common/Header/Header';
import FilterCheckbox from 'components/common/FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div>
      <Header isMainPage={false} />
      <div className='movies__container'>
        <FilterCheckbox />
        <MoviesCardList />
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
