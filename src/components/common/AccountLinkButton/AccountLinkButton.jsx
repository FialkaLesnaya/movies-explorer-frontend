import './AccountLinkButton.css';

function AccountLinkButton() {
  return (
    <a href='/profile' className='account-link-button'>
      <span className='account-link-button__text'>Аккаунт</span>

      <div className='account-link-button__icon'></div>
    </a>
  );
}

export default AccountLinkButton;
