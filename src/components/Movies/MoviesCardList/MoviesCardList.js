import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const cardList = [
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: true,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: true,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: true,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
    {
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      image: '',
      isLiked: false,
    },
  ];
  return (
    <div className='movies-card-list'>
      {cardList.map((item) => (
        <MoviesCard item={item} />
      ))}
    </div>
  );
}

export default MoviesCardList;
