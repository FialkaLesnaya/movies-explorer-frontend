import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className='error-page'>
      <h2 className='error-page__title'>404</h2>

      <p className='error-page__description'>Страница не найдена</p>

      <a className='error-page__link' href='/'>
        Назад
      </a>
    </div>
  );
}

export default ErrorPage;
