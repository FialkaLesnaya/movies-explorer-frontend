import Footer from 'components/common/Footer/Footer';
import './SavedMovies.css';
import Header from 'components/common/Header/Header';
import FilterCheckbox from 'components/common/FilterCheckbox/FilterCheckbox';
import MoviesCardList from 'components/Movies/MoviesCardList/MoviesCardList';
import LoadingButton from 'components/Movies/LoadingButton/LoadingButton';

function SavedMovies() {
  const cardList = [
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image:
        'https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=2048x2048&w=is&k=20&c=W2WIEh64AZfOEd7TuMzWQUVIBWXiHpytdWHDNEKxhPo=',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image:
        'https://media.istockphoto.com/id/1092924028/photo/colorful-painted-hands-in-front-of-a-spring-scene.jpg?s=2048x2048&w=is&k=20&c=2o2PSOt_Y88mFMuWDgU0qaH6knB7IFZeYZdPbBqCfN4=',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image:
        'https://media.istockphoto.com/id/1092924028/photo/colorful-painted-hands-in-front-of-a-spring-scene.jpg?s=2048x2048&w=is&k=20&c=2o2PSOt_Y88mFMuWDgU0qaH6knB7IFZeYZdPbBqCfN4=',
      isLiked: true,
    },
  ];

  return (
    <div>
      <Header isMainPage={false} />
      <div className='saved-movies__container'>
        <FilterCheckbox />
        <MoviesCardList cardList={cardList} isFavoriteBlock />
        <LoadingButton />
      </div>
      <Footer />
    </div>
  );
}

export default SavedMovies;
