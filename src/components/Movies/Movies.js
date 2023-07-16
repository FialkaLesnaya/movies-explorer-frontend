import Footer from 'components/common/Footer/Footer';
import './Movies.css';
import Header from 'components/common/Header/Header';
import FilterCheckbox from 'components/common/FilterCheckbox/FilterCheckbox';

function Movies() {
  return (
    <div>
      <Header isMainPage={false} />
      Movies
      <FilterCheckbox />
      <Footer />
    </div>
  );
}

export default Movies;
