import { Link } from 'react-router-dom';
import './AccountLinkButton.css';

function AccountLinkButton() {
  return (
    <Link className='account-link-button' to='/profile'>
      <span className='account-link-button__text'>Аккаунт</span>

      <div className='account-link-button__icon'></div>
    </Link>
  );
}

export default AccountLinkButton;
