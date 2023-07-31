import { useCallback } from 'react';
import './NotificationDialog.css';

function NotificationDialog({ isOpened, handleClose, isError = true }) {
  const onClose = useCallback(() => {
    handleClose(false);
  }, [handleClose]);

  return (
    <div className={'notification-dialog' + (isOpened ? ' notification-dialog--active' : '')}>
      <div className='notification-dialog__container'>
        <button
          className='notification-dialog__close'
          type='button'
          onClick={onClose}
        ></button>

        {isError && (
          <p className='notification-dialog__error-text'>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}

        {!isError && (
          <p className='notification-dialog__text'>
            Изменение данных произошло успешно
          </p>
        )}
      </div>
    </div>
  );
}

export default NotificationDialog;
